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
// Account Schema
// --------------------------------------------------------------------------------
const accountSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    }
})
// In the real world, you shouldn’t store `floats` for balances in the database.
// You usually store an integer which represents the INR value with 
// decimal places (for eg, if someone has 33.33 rs in their account, 
// you store 3333 in the database).

// There is a certain precision that you need to support (which for india is
// 2/4 decimal places) and this allows you to get rid of precision
// errors by storing integers in your DB

// --------------------------------------------------------------------------------
//  Models
// --------------------------------------------------------------------------------
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------
module.exports = {
	User,
    Account
};