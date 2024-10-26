const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
     const username=req.body.username;
    const password=req.body.password;

    //Check if user already exist or not
    try {
    const UserFind = await User.findOne({ username });
    if (!UserFind) {
      await User.create({ username, password });
      res.json({message: 'User created successfully'})
    }
    else{
      res.status(403).json({Error:'User already exists'})
    }    
    } catch (error) {
        res.status(404).json({ Error: "Error in Creating User",error });
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try {
    const allCourses = await Course.find();
    if(!allCourses)
     res.status(403).json({Error:"No courses found"})
     res.json({
       courses: allCourses
     });
    } catch (error) {
        res.status(403).json({Error:"Error to get all courses"})
    }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  try {
    await User.findOneAndUpdate(
      { username },
      {
        $push: { purchaseCourse: courseId },
      }
    );
    res.json({ message: "Course purchased successfully" });
  } catch (error) {
    console.log(error)
    res.status(404).json({error:"Error in Purchasing the Course "})
  }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;
    try {
      const user=await User.findOne({username})
      const allPurchasedCourses = await Course.find({_id:{
        "$in":user.purchaseCourse
      }})

      res.json({ purchasedCourses :allPurchasedCourses});
    } catch (error) {
      res.status(404).json({error:"Error to get purchased courses "})
    }
});

module.exports = router