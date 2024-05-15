// Mongoose  Library
const mongoose = require("mongoose");

// Database Named BAMMM
const {bammm} = require("../database.js");

// Connect to Database
mongoose.connect(bammm);

// User Schema - How data will be stored
const user = mongoose.model("User", {
  name: String,
  username: String,
  password: String
});

// Create Users
const user1 = new user({
  name: "harkirat singh",
  username: "harkirat@gmail",
  password: "123"
});

const user2 = new user({
  name: "Raman singh",
  username: "raman@gmail",
  password: "123321" 
});

const users = [user1, user2];

// Save Users
users.forEach(user => {
  // user.save(); will save users otherwise user will not be saved
  user.save().then(console.log("user created:",user));
});