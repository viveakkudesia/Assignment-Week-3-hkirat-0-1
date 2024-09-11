const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://viveakkudesia:LNMAwyqYGxaPUZDb@cluster0.gwuhb.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    Username:String,
    Password:String

});

const UserSchema = new mongoose.Schema({
    Username:String,
    Password:String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
    
});

const CourseSchema = new mongoose.Schema({
    id:Number,
    title:String,
    description:String,
    price:Number,
    
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}