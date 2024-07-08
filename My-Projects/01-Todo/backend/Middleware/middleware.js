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

module.exports = authenticateToken;
