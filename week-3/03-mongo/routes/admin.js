const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const Course = require("../models/Course"); // Assuming you have a Course model
const Admin = require("../models/Admin"); // Assuming you have an Admin model
const bcrypt = require("bcryptjs"); // For password hashing

// Admin Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ username, password: hashedPassword });
        
        await newAdmin.save();
        res.status(201).json({ message: "Admin created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating admin", error });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, duration } = req.body;

    try {
        const newCourse = new Course({ title, description, duration });
        
        await newCourse.save();
        res.status(201).json({ message: "Course created successfully", course: newCourse });
    } catch (error) {
        res.status(500).json({ message: "Error creating course", error });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses", error });
    }
});

module.exports = router;
