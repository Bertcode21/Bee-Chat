const Users = require('./../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncErrorHandler = require('./../middleware/asyncErrorHandler');

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
 
    ///3. encrypt password
const hashedpassword = await bcrypt.hash(password, 10)
req.body.password = hashedpassword;

    ///4. save in database
   const newuser =  new Users(req.body);
   await newuser.save();
   console.log(newuser);
   res.send({
    message: "New User Created Succesfully",
    sucess: true
   })
 }catch(error){
  res.send({
    message: "Error in Sign Up",
    success: false,
     error: error.message
  })
 }
})
exports.login = asyncErrorHandler(async (req, res) =>{
    try{

 }catch(error){
    res.send({
    message: "Error in Login",
    success: false,
    
  })
 }
})

exports.logout = asyncErrorHandler( async (req, res) =>{
        try{

 }catch(error){
    
 }
})