const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,User, Course} = require("../db")
const {jwt} = require("jsonwebtoken");
const secret = require("../index");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username : username,
        password : password
    })
    res.json({
        message : 'Admin created successfully'
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = Admin.find({
        username : username,
        password : password
    })
    if (user){
        const token = jwt.sign({
            username
        },secret)
        res.json({
            token : token
        })
    } else {
        res.status(403).json({
            message : "Invalid input"
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
   const title = req.body.title;
   const description = req.body.description;
   const imageLink = req.body.imageLink;
   const price = req.body.price;

   const newCourse = await Course.create({
  title,
  description,
    imageLink,
    price
   })
   res.json({
    message : "Your course created successfully",
    courseId  : newCourse._id
   })
   
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        courses : response
    })

});

module.exports = router;