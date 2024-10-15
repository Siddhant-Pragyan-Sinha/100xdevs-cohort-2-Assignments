// const { Router } = require("express");
// const adminMiddleware = require("../middleware/admin");
// const router = Router();

// // Admin Routes
// router.post('/signup', (req, res) => {
//     // Implement admin signup logic
// });

// router.post('/courses', adminMiddleware, (req, res) => {
//     // Implement course creation logic
// });

// router.get('/courses', adminMiddleware, (req, res) => {
//     // Implement fetching all courses logic
// });

// module.exports = router;


const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../models"); // Assuming you have these models set up
const bcrypt = require('bcrypt'); // For password hashing
const router = Router();

// Admin Routes

// Admin Signup
router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists." });
        } 
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new admin
        const newAdmin = new Admin({ username, password: hashedPassword, email });
        await newAdmin.save();

        res.status(201).json({ message: "Admin signed up successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error signing up admin.", error });
    }
});

// Create a Course
router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price } = req.body;

    try {
        // Validate course data (you can add more validation here)
        if (!title || !description || !price) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create a new course
        const newCourse = new Course({ title, description, price });
        await newCourse.save();

        res.status(201).json({ message: "Course created successfully!", course: newCourse });
    } catch (error) {
        res.status(500).json({ message: "Error creating course.", error });
    }
});

// Fetch All Courses
router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        // Fetch all courses from the database
        const courses = await Course.find();

        res.status(200).json({ courses });
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses.", error });
    }
});

module.exports = router;
