const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
let id = 1;


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const admin = new Admin({ username: username, password: password });
    admin.save().then((data) => {
        res.status(200).json({ message: 'Admin created successfully', })
    });
});

//{ title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const course = new Course({ id: id++, title: title, description: description, price: price, imageLink: imageLink });
    course.save().then((data) => {
        res.status(200).json({ message: 'Course created successfully', })
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((data) => {
        if (!data) {
            return res.status(400).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

module.exports = router;