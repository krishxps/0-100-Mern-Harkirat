// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------
const express = require("express");
const {userSchema, userLogin , updateBody} = require('../zod');
const jwt = require('jsonwebtoken');
const {User, Account} = require('../db');
const {JWT_SECRET} = require('../config');
const {authMiddleware} = require('../middleware');
// --------------------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------------------
const router = express.Router();

// --------------------------------------------------------------------------------
// User Routes - Login and Signup
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

    const userId = user._id;

    // Create Account
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    });

    const token = jwt.sign({
        userId
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

    const userId = user._id;

    const token = jwt.sign({
        userId: userId
    }, JWT_SECRET);

    console.log("Token:",token, "User:", user);

    return res.status(200).json({
        token: token
    });
})

// --------------------------------------------------------------------------------
// User Routes - CRUD
// --------------------------------------------------------------------------------
router.put('/',authMiddleware,async(req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.updateOne({_id: req.userId}, req.body);

    res.json({
        message: "Updated successfully",
        User : user
    })
})

// Filter users
router.get('/bulk', async(req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
})

// --------------------------------------------------------------------------------
// Delete Later
// --------------------------------------------------------------------------------
router.get('/', authMiddleware,(req, res) => {
    res.json({
        message: "Hello World"
    });
})

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------
module.exports = router;