// we can validate the data that the user can send through frontend side

const Joi = require("joi");

// Signup Validation Middleware

const SignupValidation = (req,res,next)=>{
    const Schema = Joi.object({
        name : Joi.string().min(3).max(100).required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(4).max(100).required(),
    });
    //validate is a function can validate the data  
    const {error} = Schema.validate(req.body);
    if(error){
        return res.status(400)
            .json({message:"Bad request",error})
    }
    next();
};

// Login Validation Middleware

const LoginValidation = (req,res,next)=>{
    const Schema = Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().min(4).max(100).required(),
    });
    //validate is a function can validate the data  
    const {error} = Schema.validate(req.body);
    if(error){
        return res.status(400)
            .json({message:"Bad request",error})
    }
    next();
};

module.exports = {
    SignupValidation,
    LoginValidation
}