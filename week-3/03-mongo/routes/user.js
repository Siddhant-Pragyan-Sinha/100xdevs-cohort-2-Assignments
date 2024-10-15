// const { Router } = require("express");
// const router = Router();
// const userMiddleware = require("../middleware/user");

// // User Routes
// router.post('/signup', (req, res) => {
//     // Implement user signup logic
// });

// router.get('/courses', (req, res) => {
//     // Implement listing all courses logic
// });

// router.post('/courses/:courseId', userMiddleware, (req, res) => {
//     // Implement course purchase logic
// });

// router.get('/purchasedCourses', userMiddleware, (req, res) => {
//     // Implement fetching purchased courses logic
// });

// module.exports = router




//my submission 
// User Model
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Course Model
const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
});

const Course = mongoose.model('Course', CourseSchema);

// Purchased Course Model
const PurchasedCourseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
});

const PurchasedCourse = mongoose.model('PurchasedCourse', PurchasedCourseSchema);

module.exports = {
    User,
    Course,
    PurchasedCourse,
};






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

// Purchase a Course
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const { courseId } = req.params;
    const userId = req.user.id; // Assuming user ID is added to req.user by userMiddleware

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found." });
        }

        // Create a new PurchasedCourse record
        const purchasedCourse = new PurchasedCourse({ userId, courseId });
        await purchasedCourse.save();

        res.status(201).json({ message: "Course purchased successfully!", purchasedCourse });
    } catch (error) {
        res.status(500).json({ message: "Error purchasing course.", error });
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
