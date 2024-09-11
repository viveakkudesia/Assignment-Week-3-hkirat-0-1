const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const Username=req.body.Username;
const Password=req.body.Password;
await User.create({
    Username:Username,
    Password:Password
}
)
res.send({
    message: 'User created successfully'
})
});

router.get('/courses', async (req, res) => {
    const response=await Course.findone({});
    res.json({
        response
    });
    
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseid=req.params.courseId;
    const Username=req.headers.Username;
   await User.findone({Username:
    Username
   },{
    "$push":{
        purchasedCourses:courseid
    }
   });
    res.json({
        message: 'Course purchased successfully' 
    })
    
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
const user=await User.findone({
    username:req.headers.username
});
console.log(user.purchasedCourses);
const courses=await Course.find({
    _id:{
        "$in":user.purchasedCourses
    }
});
res.json({
    courses:courses
});
});

module.exports = router