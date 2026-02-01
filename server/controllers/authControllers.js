const Users = require('./../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncErrorHandler = require('./../middleware/asyncErrorHandler');
const { token } = require('morgan');

exports.signup = asyncErrorHandler( async (req,res)=>{
    const password = req.body.password
 try{


    ///1 if user Exists
 const user = await Users.findOne({ email: req.body.email })

    ///2. If user Exists send an Error Response
    if(user){
    return res.send({
    message: "User already Exits",
    sucess: false
  })
    }
    ///3. if Length of password is less than 8
     if(password.length < 8){
      return res.status(401).send({
        message: "Password must be at least 8 characters long",
        success: false
      })
     }

    ///4. encrypt password
const hashedpassword = await bcrypt.hash(password, 10)
req.body.password = hashedpassword;

    ///5. save in database
   const newuser =  new Users(req.body);
   await newuser.save();
   console.log(newuser);
   res.send({
    message: "New User Created Succesfully",
    sucess: true,
    newuser
   })
 }catch(error){
  res.send({
    message: "Error in Sign Up",
    success: false,
     error: error.message
  })
 }
})


exports.login = asyncErrorHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      return res.send({
        message: "Oops sorry the user does not exist",
        success: false
      });
    }

    const isvalid = await bcrypt.compare(password, user.password);

    if (!isvalid) {
      return res.send({
        message: "Password incorrect",
        success: false
      });
    }

    const token = jwt.sign(
      { id: user._id }, // important: use id not userId
      process.env.Secret_Key,
      { expiresIn: "1d" }
    );

    res.send({
      message: "User Logged in Successfully",
      success: true,
      token
    });

  } catch (error) {
    console.log("Login error:", error);

    res.status(500).json({
      message: error.message,
      success: false
    });
  }
});



exports.logout = asyncErrorHandler( async (req, res) =>{
        try{

 }catch(error){
    
 }
})