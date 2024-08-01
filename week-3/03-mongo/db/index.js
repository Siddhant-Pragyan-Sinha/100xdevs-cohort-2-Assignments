const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://lawry1998:Tf9jeGN2TlANhjj2@cluster0.ckzd0bt.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchased: { type: Array }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id: Number, title: String, description: String, price: Number, imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}