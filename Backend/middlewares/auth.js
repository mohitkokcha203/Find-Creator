const JWT = require("jsonwebtoken");

const ensureUserLoggedIn = (req,res,next)=>{
    const token = req.headers['authorization'];
    if(!token){
        return res.status(403)
            .json({message:"Unauthorized user Token is require"});

    }
    try {
        const datadecoded = JWT.verify(token,process.env.Secret_Key);
        req.user = datadecoded;
        next();
    } catch (error) {
        return res.status(403)
            .json({message:"Unauthorized user Token is wrong or expired"});
    }

    
}
module.exports = ensureUserLoggedIn