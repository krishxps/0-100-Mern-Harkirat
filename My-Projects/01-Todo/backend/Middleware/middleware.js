const jwt = require('jsonwebtoken');
const {jwtToken} = require('../../../../database')
const {users} = require('../Database/userSchema');

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

const adminMiddleware = async(req , res, next) => {
    const User = await users.findOne({ _id: req.user._id });
    if(!User.isAdmin){
        return res.status(403).json({ Message: "Access Denied: Admins Only" });
    }
    next();
} 

module.exports = {
    authenticateToken,
    adminMiddleware
};
