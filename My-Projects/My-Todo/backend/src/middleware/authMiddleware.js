const jwt = require("jsonwebtoken");
const {jwtToken} = require("../../../../../database");
const User = require("../models/user");

const checkAuth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if(!token) {
        res.status(401).json({ error: 'Please authenticate using a valid token' });
    }
    try{
        const data = jwt.verify(token, jwtToken);
        req.user = data.user;
        next();
    } catch(err) {
        res.status(401).json({ error: 'Please authenticate using a valid token' });
    }
}

const checkAdmin = async (req, res, next) => {
    const user = await User.findOne({ _id: req.user._id });
    if(!user.isAdmin) {
        res.status(401).json({ error: 'User is not an admin' });
    }
    next();
}

module.exports = {checkAuth, checkAdmin}