const mongoose = require('mongoose');

const uri = process.env.MONGO_URI; // Ensure this is not undefined

if (!uri) {
  console.error('MongoDB URI is not defined. Check your environment variables.');
  process.exit(1);
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type:String, 
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    courses : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Course"
        }
    ]
});

const UserSchema = new mongoose.Schema({
//Schema Definition here
username : {
    type:String,
    unqiue : true,
    required : true
}, 
password : {
    type : String, 
    required : true
},
myCourses : [
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }
]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String, 
    description : String, 
    price : Number, 
    image : String, 
    owner : String, 
    published : {type : Boolean, default : false}
});


// AdminSchema.pre('save', function(next) {
//     const admin = this ;
//     if(!admin.isModified('password')) return next();
//     bcrypt.hash(admin.password, 10, function(err, hashedPassword) {
//         if (err) return next(err);
//         admin.password = hashedPassword;
//         next();
//     });
// })
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}