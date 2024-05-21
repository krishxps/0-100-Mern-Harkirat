const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../JWT_SECRET");

// Admin Routes
router.post('/signup', async(req, res) => {

    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({username: username});

    if(admin) {
        return res.status(403).json({
            msg: 'Admin already exists'
        })
    }
    
    Admin.create({
        username: username,
        password: password
    });

    res.json({
        message: 'Admin created successfully'
    });
    
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({username: username});

    if(!admin) {
        return res.status(403).json({
            msg: 'Admin does not exist'
        })
    }

    if(admin.password !== password) {
        return res.status(403).json({
            msg: 'Wrong password'
        })
    }

    const token = jwt.sign({username: username}, JWT_SECRET);
    //Bearer <token>
    res.json({
        message: 'Admin signed in successfully',
        token: token
    });

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    });

    console.log("Created course with title", title, "description", description, "imageLink", imageLink, "price", price);

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    });
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;