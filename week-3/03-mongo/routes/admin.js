const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin} = require("../db")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const{username , password} = req.body;
    if(!username || !password)
    {
        return res.status(400).send({message : "All Fields are required"});
    }
    try {
        await Admin.create({username : username , password: password});
        return res.status(201).send({message : "Admin Created Successfully"});
    } catch (error) {
        return res.status(500).send({message : "Error creating admin account", error : error});
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description,price, imageLink } = req.body;
    if(!title || !description || !price || !imageLink)
    {
        return res.status(404).send({message : "All Fields are required"});
    }
    try {
        const admin = await Admin.findById(req.admin._id);
        console.log(admin);
        const course = await Course.create({
            title, description, price, imageLink, published : true, owner : admin.username
        });
        console.log(course);
        admin.courses.push(course._id);
        await admin.save();
        return res.status(201).send({message : "Course Created Successfully", courseId : course._id});
    } catch (error) {
        return res.status(500).send({message : "Error Creating courses ", error : error});
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try {
        const admin = await Admin.findById(req.admin._id).populate("courses");
    return res.status(200).send({courses : admin.courses});
    } catch (error) {
        return res.status(400).send({message : "Erorr Fetching courses ", error : error});
    }

});

module.exports = router;