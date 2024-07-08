const jwt = require('jsonwebtoken');
const {jwtToken} = require('../../../../database')

const authenticateToken = (req, res, next) => {
    const token = req.header('token')?.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ Message: "Access Denied: No Token Provided" });
    }

    try {
        const decoded = jwt.verify(token, jwtToken);
        req.user = decoded; 
        next();
    } catch (err) {
        return res.status(401).json({ Message: "Invalid Token" });
    }
};

const adminMiddleware = (req , res, next) => {
    if(!req.user){
        return res.status(401).json({ Message: "Access Denied: No User Authenticated" });
    }

    if(!req.user.isAdmin){
        return res.status(403).json({ Message: "Access Denied: Admins Only" });
    }

    next();
} 

module.exports = {
    authenticateToken,
    adminMiddleware
};
