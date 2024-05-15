const express = require("express");
const mongoose = require("mongoose");
const { bammm } = require("../database.js");

const app = express();
app.use(express.json());

mongoose.connect(bammm);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

app.post("/signup", async (req, res) => {
  const { username, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
      console.log("Username already exists:", existingUser);
      return res.status(400).json({ msg: "Username already exists",User: existingUser });
    }

    // Create a new user
    const user = new User({
      name: name,
      email: username,
      password: password
    });

    // Save the new user to the database
    await user.save().then(() => console.log("User created successfully", user));

    res.status(201).json({ msg: "User created successfully" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ msg: "Internal server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
