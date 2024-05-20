const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    console.log("Created admin with username", username, "password", password);

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
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
        message: 'Course created successfully'
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const response = Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;