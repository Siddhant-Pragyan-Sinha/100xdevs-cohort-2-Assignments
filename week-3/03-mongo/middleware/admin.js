const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  if (!username || !password) {
    return res.status(400).send({ message: "Invalid Username or Password" });
  }
  const admin = await Admin.findOne({ username: username, password: password });
  if (!admin) {
    return res.status(404).send({ message: "Admin Not Found" });
  } else {
    req.admin = admin;
    next();
  }
}

module.exports = adminMiddleware;
