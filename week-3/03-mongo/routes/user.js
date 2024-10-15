const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course, PurchasedCourse } = require("../models"); // Assuming you have these models set up
const bcrypt = require('bcrypt'); // For password hashing

// User Signup
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User signed up successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error signing up user.", error });
    }
});

// Get All Courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find(); // Fetch all courses
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses.", error });
    }
});


// Fetch Purchased Courses
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const userId = req.user.id; // Get user ID from the middleware

    try {
        const purchasedCourses = await PurchasedCourse.find({ userId }).populate('courseId');
        res.status(200).json(purchasedCourses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching purchased courses.", error });
    }
});

module.exports = router;
