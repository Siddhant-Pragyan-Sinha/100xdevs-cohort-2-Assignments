const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const bcrypt = require("bcrypt");
const router = Router();
const jwt = require("jsonwebtoken");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management API
 */

/**
 * @swagger
 * /admin/signup:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
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
 *         description: Admin created successfully
 *       400:
 *         description: Missing fields
 *       500:
 *         description: Error creating admin
 */
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .send({ message: "Username and password are required" });
  }
  //Check if the user with this username alread exists or not
  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) {
    return res.status(400).send({ message: "Username already exists " });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await Admin.create({ username, password: hashedPassword });
  res.json({
    message: "Admin Created Successfully",
  });
});

/**
 * @swagger
 * /admin/signin:
 *   post:
 *     summary: Sign in an admin
 *     tags: [Admin]
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
    const username = req.body.username;
    const password = req.body.password;
    console.log(process.env.JWTSECRET);

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).send({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid username or password" });
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
      message: "Incorrect email and pass",
    });
  }
});

/**
 * @swagger
 * /admin/courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *               owner:
 *                 type: string
 *     responses:
 *       201:
 *         description: Course created successfully
 *       400:
 *         description: Missing fields
 *       500:
 *         description: Error creating course
 */
router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    const { title, description, imageLink, price } = req.body;

    if (!req.username) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No username found" });
    }

    const admin = await Admin.findOne({ username: req.user.username });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const newCourse = await Course.create({
      title,
      description,
      image: imageLink,
      price,
      owner: req.user.username,
    });

    // Add the new course ID to the admin's courses array
    admin.courses.push(newCourse._id);
    await admin.save();

    // Respond with success message and the new course ID
    res.json({
      message: "Course Created Successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    console.error("Error creating course:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

/**
 * @swagger
 * /admin/courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of courses
 *       500:
 *         description: Error fetching courses
 */
router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const admin = await Admin.findOne({ username: req.user.username }).populate(
      "courses"
    );
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    return res.status(201).send({ courses: admin.courses });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Erorr Fetching courses ", error: error });
  }
});

module.exports = router;
