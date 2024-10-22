const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = new User({ username: username, password: password, purchased: null });
    user.save().then((data) => {
        res.status(200).json({ message: 'User created successfully', })
    });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((data) => {
        if (!data) {
            return res.status(400).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    Course.findOne({ id: courseId }).then((data, err) => {
        if (!data) {
            return res.sendStatus(400);
        } else {
            User.updateOne({ username: username }, { "$push": { purchased: courseId } }).then((data) => {
                res.status(200).send("Purchased course!");
            });
        }
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({ username: username });
    const courses = await Course.find({ id: { "$in": user.purchased } });
    res.json({ courses: courses });
});

module.exports = router