const User = require("../models/user");
const jwt = require("jsonwebtoken");
const {jwtToken} = require("../../../../../database");

const register = async (req, res) => {
    const {username, password} = req.body;
    const user = new User({username, password});
    await user.save();
    res.json({message: "User created successfully"});
}

const login = async(req,res) => {
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user || !user.password == password){
        return res.status(400).json({
            message: 'Invalid credentials' 
        });
    }
    const token = jwt.sign({
        id: user._id, isAdmin : user.isAdmin
    }, jwtToken);

    res.json({token});
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted successfully' });
};

module.exports = {
    register,
    login,
    deleteUser
}