// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------
const express = require("express");
const {userSchema, userLogin} = require('../zod');
const jwt = require('jsonwebtoken');
const {User} = require('../db');
const {JWT_SECRET} = require('../config');
// --------------------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------------------
const router = express.Router();

// --------------------------------------------------------------------------------
// User Routes
// --------------------------------------------------------------------------------
router.post("/signup", async(req, res) => {

    const { success } = userSchema.safeParse(req.body)

    if(!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const exists = await User.findOne({username: req.body.username});

    if(exists) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    const userID = user._id;

    const token = jwt.sign({
        userID
    }, JWT_SECRET);

    console.log("Token:",token, "User:", user);

    return res.status(200).json({
        message: "User created successfully",
        token: token
    });
})

router.post("/login", async(req, res) => {
    const { success } = userLogin.safeParse(req.body);

    const user = await User.findOne({username: req.body.username, password: req.body.password});

    if(!success || !user) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const userID = user._id;

    const token = jwt.sign({
        userID: userID
    }, JWT_SECRET);

    console.log("Token:",token, "User:", user);

    return res.status(200).json({
        token: token
    });
})

// --------------------------------------------------------------------------------
// Delete Later
// --------------------------------------------------------------------------------
router.get('/', (req, res) => {
    res.send("Hello World");
})

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------
module.exports = router;