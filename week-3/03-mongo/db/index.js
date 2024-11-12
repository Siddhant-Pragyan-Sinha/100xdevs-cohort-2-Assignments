const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
    //testConnection(); // Call the test function after a successful connection to check whether the connection is establshed or the data has been entered inside the database or not
  })
  .catch((err) => {
    console.error("Connection Error", err);
  });

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      
    },
  ],
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  myCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  image: String,
  owner: String,
  published: { type: Boolean, default: false },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);
/*
const testConnection = async () => {
    try 
    {
        const testCourse = new Course ({
        title: "Sample Course",
            description: "This is a test course.",
            price: 99.99,
            image: "sample.jpg",
            owner: "Test Owner"
        });
        const savedCourse = await testCourse.save();
        console.log('Test Course saved Successfully' , savedCourse);

        //Same goes for the admin and for the users
    }
         } catch (error) {
        console.error('Test Error:', error);
    } finally {
        mongoose.connection.close(); // Close the connection after the test
    }
    }
*/

module.exports = {
  Admin,
  User,
  Course,
};
