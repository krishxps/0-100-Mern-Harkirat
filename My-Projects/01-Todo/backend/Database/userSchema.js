const mongoose = require('mongoose');
const {bammm} = require('../../../../database');
mongoose.connect(bammm).then(console.log("Databse Connected From userSchema"));
const user = mongoose.Schema({
    name: String,
    username: {type: String, unique: true},
    password: String,
    isAdmin: {type:Boolean, default: false}
});

const users = mongoose.model('users',user);

module.exports = {
    users
}