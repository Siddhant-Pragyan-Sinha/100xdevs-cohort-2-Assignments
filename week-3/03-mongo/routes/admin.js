const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

async function usernameTaken(uname) {
  const admin = await User.findOne({ username: uname });
  return admin ? true : false;
}

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (usernameTaken(username)) {
    return res
      .status(404)
      .json({ msg: "Admin user with the provided username already exists" });
  }

  await Admin.create({
    username: username,
    password: password,
  });

  res.status(200).json({ msg: "Admin account created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Admin auth validation already done in middleware
  const course = {
    title: req.body.title || " ",
    description: req.body.description || " ",
    price: parseFloat(req.body.price) || 0,
    imgURL: req.body.imageLink || " ",
    published: true,
  };

  const newCourse = await Course.create({ ...course });
  res
    .status(200)
    .json({ message: "Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, (req, res) => {
  const courses = Course.find({});
  const publishedCourses = courses.filter((course, _) => {
    course.published ? true : false;
  });

  return res.status(200).json({ courses: publishedCourses });
});

module.exports = router;
