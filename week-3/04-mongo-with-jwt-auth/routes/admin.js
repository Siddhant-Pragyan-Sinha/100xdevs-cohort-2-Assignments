const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt=require("jsonwebtoken")
// const {"shahid_server" } = require("../index");
// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    //Check if user already exist or not
    try {
    const adminFind = await Admin.findOne({ username });
    if (!adminFind) {
      await Admin.create({ username, password });
      res.json({message: 'Admin created successfully'})
    }
    else{
      res.status(403).json({Error:'Admin already exists'})
    }    
    } catch (error) {
        res.status(404).json({ Error: "Error in Creating Admin",error });
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
     const username = req.body.username;
     const password = req.body.password;

    const validAdmin=await Admin.find({username,password});

    if(validAdmin){
      const tokenGenerated = jwt.sign({ username }, "shahid_server");
      res.json({"token":tokenGenerated})
    }
    else{
      res.status(404).json({error:"Incorrect email ID & password"})
    }

});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    try {
    const { title, description, price, imageLink, published } = { ...req.body };
   const newCourse= await Course.create({title, description, price, imageLink, published})
     res.json({
       message: "Course created successfully",
       courseId: newCourse._id,
     });
    } catch (error) {
        res.status(404).json({Error:"Error in creating Course",error})
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
     try {
      const allCourses = await Course.find()
      if(allCourses)
       res.json({ courses :allCourses});
      else
        res.status(404).json({Error:"Not get Any Courses"});
    } catch (error) {
      res.status(404).json({ Error: "Error to get Courses", error });
    }
});

module.exports = router;