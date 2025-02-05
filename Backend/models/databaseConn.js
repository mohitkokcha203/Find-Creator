const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:27017/Find-Youtuber-Creator"

function connection() {
    return mongoose.connect(URL)
    .then(()=>{
        console.log("MongoDb is Connected Successfully");
        
    })
    .catch((err)=>{
        console.log("MongoDb is not Connnected",err);
        
    })

} 

module.exports = {
    connection}

