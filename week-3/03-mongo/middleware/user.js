const { User } = require("../db");

function userMiddleware(req, res, next) {
    const Username=req.headers.Username;
    const Password=req.headers.Password;
    User.findone({Username:Username,Password:Password}).then((value)=>{
        if(value){
            next();
        }
        else{
            res.status(404).json({message:"user Not found"});
        }
    })
}

module.exports = userMiddleware;