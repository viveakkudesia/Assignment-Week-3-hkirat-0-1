// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const Username=req.headers.Username;
    const Password=req.headers.Password;
    Admin.findone({Username:Username,Password:Password}).then((value)=>{
        if(value){
            next();
        }
        else{
            res.status(404).json({message:"user Not found"});
        }
    })
        
    }


module.exports = adminMiddleware;