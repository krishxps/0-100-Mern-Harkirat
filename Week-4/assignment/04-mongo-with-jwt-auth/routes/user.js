const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const {JWT_SECRET} = require("../JWT_SECRET");
const jwt = require("jsonwebtoken");
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    });

    res.json({
        message: 'User created successfully'
    });
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({username: username});

    if(!user) {
        return res.status(403).json({
            msg: 'User does not exist'
        })
    };

    if(user.password !== password) {
        return res.status(403).json({
            msg: 'Wrong password'
        })
    };

    const token = jwt.sign({username: username}, JWT_SECRET);
    res.json({
        message: 'User signed in successfully',
        token: token
    });

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    }) 
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    console.log(username);
    await User.updateOne({username: username}, {$push: {myCourses: courseId}});
    return res.status(200).send({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findById(req._id).populate("myCourses");
    return res.status(200).send({ purchasedCourses: user.myCourses });
});

module.exports = router