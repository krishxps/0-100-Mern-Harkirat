// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------
const mongoose = require('mongoose');
const {bammm} = require('../../../database')

// --------------------------------------------------------------------------------
// Database connection
// --------------------------------------------------------------------------------
mongoose.connect(bammm);

// --------------------------------------------------------------------------------
// User Schema
// --------------------------------------------------------------------------------
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// --------------------------------------------------------------------------------
// User Model
// --------------------------------------------------------------------------------
const User = mongoose.model('User', userSchema);

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------
module.exports = {
	User
};