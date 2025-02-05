const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT||8080;
const {connection} = require("./models/databaseConn");
const authroute = require("./routes/authRoute.js");
const findcreateRoute = require("./routes/findcreatorRoute.js")


// Connection to MongoDb
connection();

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


// Routes
app.use("/auth", authroute);
app.use("/",findcreateRoute)



app.listen(PORT,()=>{
    console.log(`Server is Started on PORT: ${PORT}`);
    
})