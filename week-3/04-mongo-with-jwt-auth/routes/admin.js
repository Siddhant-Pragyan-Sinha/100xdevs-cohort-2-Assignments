const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { JWT_SECRET } = require("../constants");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const adminUser = await Admin.findOne({
        username,
    });
    console.log('----adminUser----', adminUser);

    if(adminUser) {
        res.status(403).json({
            message: "Username already exists!"
        });
    } else {
        await Admin.create({
            username,
            password
        });
        res.status(200).json({
            message: "Admin user created successfully."
        });
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    try {
        const signInToken = await jwt.sign({
            username
        }, JWT_SECRET);
        
        if (signInToken) {
            res.status(200).json({
                token: signInToken
            });
        } else {
            res.status(403).json({
                message: "Username or Password not valid."
            })
        }
    } catch (err) {
        console.log('---err---', err);
        res.json({
            message: err
        });
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    });
    res.json({
        msg: "Course created successfully", courseId: newCourse._id,
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;