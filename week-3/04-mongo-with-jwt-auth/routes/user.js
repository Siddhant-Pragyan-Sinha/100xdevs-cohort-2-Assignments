const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const jwtPassword = "secret123";

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({username, password});
    res.status(200).json({ message: 'User created successfully' });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({username, password}).then((value) => {
        if(value){
            const token = jwt.sign(username, jwtPassword);
            res.status(200).json({token: token});
        } else {
            res.sendStatus(404);
        }
    });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then((value) => {
        res.status(200).json({course:value});
    }).catch(()=>{
        res.sendStatus(404);
    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const cid = req.params.courseId;
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1];
    const user = jwt.verify(token, jwtPassword);
    Course.find({_id:cid}).then(async (value)=> {
        console.log(value);
        if(value){
            await User.updateOne({username:user}, {"$push":{purchasedCourses: cid}});
            res.sendStatus(200);
        }else{
            res.sendStatus(404);
        }
    }) 
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1];
    const user = jwt.verify(token, jwtPassword);
    const userDetails = await User.findOne({username:user});
    const courses = await Course.find({_id: {"$in" : userDetails.purchasedCourses}});
    res.status(200).json({courses: courses});
});

module.exports = router