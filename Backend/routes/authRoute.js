const { signup, login } = require("../controllers/authController");
const { SignupValidation, LoginValidation } =require("../middlewares/authValidation");

const express = require("express");
const router = express.Router();



router.post("/signup",SignupValidation,signup);

router.post("/login",LoginValidation,login);


module.exports = router