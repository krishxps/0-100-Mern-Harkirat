const mongoose = require("mongoose");
const {bamma} = require("../../../../../database");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false } 
});

const User = mongoose.model("User", userSchema);
module.exports = User