const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    
    username = req.body.username;
    password = req.body.password;
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        "msg" : "Admin Created Successfully"
    })

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;

    const admin = await Admin.find({
        username,
        password
    })

    console.log(JWT_SECRET);

    if(admin){
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    }else{
        res.status(411).json({
            message : "Incorrect email and password"
        })
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
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