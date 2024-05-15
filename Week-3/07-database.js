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
  name: "Pattarawan Sarvodaya",
  username: "bam@gmail",
  password: "IlovedThatBlackSTshirtGuy"
});

const user2 = new user({
  name: "Krish Patel",
  username: "Krish@gmail",
  password: "IloveParsianGirl" 
});

const user3 = new user({
  name: "Aryan Patel",
  username: "aryan@gmail",
  password: "IloveMilf" 
});
const users = [user1, user2, user3];

// Save Users
users.forEach(user => {
  // user.save(); will save users otherwise user will not be saved
  user.save().then(console.log("user created:",user));
});