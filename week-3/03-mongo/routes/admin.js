const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes

// Admin Signup
router.post('/signup', (req, res) => {
    const { username, password, email } = req.body;

    // Validate input (consider using a validation library)
    // Hash password using bcrypt
    // Save admin user to the database
    // Send success response or error message
    res.status(201).json({ message: "Admin signed up successfully!" });
});

// Create a Course
router.post('/courses', adminMiddleware, (req, res) => {
    const { title, description, price } = req.body;

    // Validate input
    // Implement logic to save the new course to the database
    // Example: const newCourse = await Course.create({ title, description, price });
    
    res.status(201).json({ message: "Course created successfully!" });
});

// Fetch All Courses
router.get('/courses', adminMiddleware, (req, res) => {
    // Implement logic to fetch all courses from the database
    // Example: const courses = await Course.find();
    
    res.status(200).json({ courses: [] }); // Replace with actual courses data
});

module.exports = router;
