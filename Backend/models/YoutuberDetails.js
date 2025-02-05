const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    channelimage:{
        type:String,
        required:true,
        
    },

    channelname:{
        type:String,
        required:true,
        
    },
    category:{
        type:String,
        required:true
       
    },
    language:{
        type:String,
        required:true
        
    },
    country:{
        type:String,
        required:true
        
    },
    subscriber:{
        type:Number,
        
    },
    
    totalviews:{
        type:Number,
        
    },
    
    totalvideos:{
        type:Number,
        
    },
    creationat:{
        type:String,
        
    },
    
    bioname:{
        type:String,
       
        
    },
    tagname:{
        type:String,
       
        
    },
    

    latestvideo:{
        type:Number,
        
    },
    latestvideodetail:{
        type:String,   
    },
    
    shorts:{
        type:String,
        
    },
    membership:{
        type:String,
        
    },
    madeforkid:{
        type:String,
        
    },
    youtube:{
        type:String,
    
    },
    instagram:{
        type:String,
        
    },
    twiter:{
        type:String,
        
    },
    facebook:{
        type:String,
        
    },
    linkdin:{
        type:String,
        
    },
    
    email:{
        type:String,
           
    },
    about:{
        type:String,
        
    },
    averagevideo:{
        type:Number,
        
    },
    averageviews:{
        type:Number,
        
    },
    averagelikes:{
        type:Number,
        
    },
    averagecomments:{
        type:Number,
        
    },
    averagevideolength:{
        type:Number,
        
    },
    

},{
    timestamps:true
});

const User = mongoose.model("Youtuber",UserSchema);

module.exports = User;