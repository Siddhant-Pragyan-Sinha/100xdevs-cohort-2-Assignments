const { Router } = require("express");
const {User, Course} = require("../db");
const {JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken")
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    username = req.body.username;
    password = req.body.password;
    const user = await User.create({
        username: username,
        password: password
    })
    
    res.json({
        "msg" : "User Created Successfully"
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    console.log(JWT_SECRET);

    if(user){
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

router.get('/courses',userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const  response = await Course.find({});

    res.json({
        courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try {
        await User.updateOne({
            username : username
        },{
            "$push" : {
                purchasedCourses : courseId
            }
        });
        res.json({
            message : "course purchased complete!"
        })
    } catch (error) {
        console.log(error)
    }
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    const user = await User.findOne({
        username
    });

    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    });

    res.json({
        courses : courses
    })
});

module.exports = router