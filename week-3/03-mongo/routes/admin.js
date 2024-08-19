const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course}=require("../db");
// Admin Routes
router.post('/signup', async (req, res) => {
    //implement admin signup logic
   const username=req.body.username;
   const password= req.body.password;
   //check if the username exists
   await Admin.create({
    username:username,
    password:password
   })
   .then(function(){
    res.json({
        message:"Admin created successfully"
    })
   })

});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title= req.body.title;
    const description= req.body.description;
    const imageLink= req.body.imageLink;
    const price= req.body.price;
   //zod
    const newCourse= await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse)
    res.json({
        message:'course created successfully',courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response= await Course.find({});
        req.json({
           courses: response
        })

});

module.exports = router;