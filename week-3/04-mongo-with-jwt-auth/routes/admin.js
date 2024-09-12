const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db")
const JWT_SECRET = require("..")
const jwt = require("jsonwebtoken")
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //chaeck if a user with this usernamer already exists
    await Admin.create({
        username: username,
        password: password
    })
    
    res.json({
        msg: 'Admin created successfuliy'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    }else {
        res.status(411).json({
            msg: "Incorrect email and password"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;