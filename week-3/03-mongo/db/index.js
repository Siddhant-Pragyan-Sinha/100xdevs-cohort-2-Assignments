const { appendFile } = require('fs');
const mongoose = require('mongoose');


const express = require("express")
const app = express();
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb+srv://User_app:%3CUser_app%3E@cluster0.o5m5w.mongodb.net/');


const User = mongoose.model('Users', {name: String, email: String, password: String});


app.post("/signup", async function(req, rs){
  const username = req.body.username;

  const password = req.body.password;

  const name = req.body.name;

  const existingUser = await User.findOne({email: username});

  if(existingUser){
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: name, 
    email: username, 
    password: password
  });

  user.save();
    res.json({
      "msg": "User created successfully"
    })
  
})




// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
