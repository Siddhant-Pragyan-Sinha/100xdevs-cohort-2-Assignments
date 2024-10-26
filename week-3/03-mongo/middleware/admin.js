// Middleware for handling auth
const { Admin } = require("../db");
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  try{
  const adminFound = await Admin.findOne({ username, password });
  if(adminFound)
   next();
  else
   res.status(403).json({message:"Admin not found"})
  }catch(err){
    res.status(404).json({ Error: "Error to get admin" });
  }
}

module.exports = adminMiddleware;
