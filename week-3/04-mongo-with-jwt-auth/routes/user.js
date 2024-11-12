const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management API
 */

/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: user created successfully
 *       400:
 *         description: Missing fields
 *       500:
 *         description: Error creating user
 */
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(404)
      .send({ message: "Username and Password are required" });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res
      .status(403)
      .send({
        message: "Username already exists please enter unique username",
      });
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  await User.create({ username: username, password: hashedPassword });
  res.json({
    message: "User Created Successfully",
  });
});

/**
 * @swagger
 * /user/signin:
 *   post:
 *     summary: Sign in an user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sign in successful
 *       400:
 *         description: Missing fields
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Error during sign in
 */

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ message: "Invalid Username or Password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid username or Password" });
    }
    const token = jwt.sign(
      {
        username,
      },
      process.env.JWTSECRET
    );

    res.json({
      token,
    });
  } catch (error) {
    res.status(411).json({
      message: "Incorrect email and password",
    });
  }
});

/**
 * @swagger
 * /user/courses:
 *   get:
 *     summary: Get all courses
 *     tags: [User]
 *     responses:
 *       200:
 *         description: List of courses
 *       500:
 *         description: Error fetching courses
 */

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const allCourses = await Course.find();
    
    return res.status(200).json({ courses: allCourses});
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error fetching Courses", error: error });
  }
});



/**
 * @swagger
 * /user/courses:
 *   post:
 *     summary: Purchase a new course
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Course purchased successfully
 *       400:
 *         description: Missing fields
 *       500:
 *         description: Error while pourchasing the course
 */

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    if (!courseId) {
        return res.status(400).send({ message: "Course Id is required" });
    }
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).send({ message: "Course Id not Found" });
        }
        const user = req.user; 
        if (user.myCourses.includes(course._id)) {
            return res.status(400).send({ message: "You already have this course in your library" });
        }
        user.myCourses.push(course._id);
        await user.save();
        res.status(200).send({ message: "Course purchased Successfully" });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Error occurred while purchasing the course", error });
    }
});

/**
 * @swagger
 * /user/PurchasedCourses:
 *   get:
 *     summary: Get all purchasedCourses
 *     tags: [User]
 *     responses:
 *       200:
 *         description: List of courses
 *       500:
 *         description: Error fetching courses
 */
router.get("/purchasedCourses", userMiddleware, async(req, res) => {
  // Implement fetching purchased courses logic
  try
  {
    const user = await User.findById(req.user._id).populate("myCourses");
    console.log(user);
    return res.status(200).send({purchaseCourses : user.myCourses});
  }catch(error)
  {
    return res.status(404).send({message : "Error Fetching Courses"})
  }
});

module.exports = router;
