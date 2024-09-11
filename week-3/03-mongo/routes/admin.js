const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
const Username=req.body.Username;
const Password=req.body.Password;
await Admin.create({
    Username:Username,
    Password:Password
}
)
res.send({
    message: 'Admin created successfully'
})
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const newCourse=await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price,

    })
    res.send({ message: 'Course created successfully', courseId: "new course id" }
)

});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response=await Course.findone({})
    res.json({
        response
    })
});

module.exports = router;