const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken")
const UserModel = require("../models/user");

const signup = async (req,res) =>{
    try {
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
                .json({message:"User is already exists ", success:false});
        }
        const userModel = new UserModel({name,email,password});
        // password can encrpted using bcrypt

        userModel.password = await bcrypt.hash(password,10);
        // save method is used to insert data into collection
        await userModel.save();
        res.status(201)
            .json({ 
                message:"Signup Successfully", 
                success:true
            })

        
    } catch (error) {
        res.status(500)
            .json({ 
                message:"Internal Server Error", 
                success:false
            })
    }
}

// login
const login = async (req,res) =>{
    try {
        const {email, password} = req.body;
        
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(403)
                .json({message:"Email Is Not Registered ", success:false});
        }
        
        // Add await here
        const isPasswordEqual = await bcrypt.compare(password, user.password);

        if(!isPasswordEqual){
            return res.status(403)
                .json({message:"Password is wrong ", success:false});
        }

        // Create Jwt token for user 
        const jwtToken = JWT.sign(
            {email:user.email , id: user._id},       //payload
            process.env.Secret_Key,                  //Secret Key for create token
            {expiresIn:"24h"}                        //expirein - token expire in which time period
        )

        res.status(200)
            .json({ 
                message:"Login Successfully", 
                success:true,
                jwtToken,
                email,
                name:user.name
                
            })

        
    } catch (error) {
        res.status(500)
            .json({ 
                message:"Internal Server Error", 
                success:false
            })
    }
}


module.exports = {
    signup,
    login
}