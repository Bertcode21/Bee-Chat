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
        /// check if user exists
  const user = await Users.findOne({ email: req.body.email})
  if(!user){
    res.send({
        message: "OOps sorry the user does not exists",
        success: false
    })
  }

        // 2. check if user email and passowrd are correct
      const isvalid = await bcrypt.compare(req.body.password, user.password)
           if(!isvalid){
         res.send({
        message: "password incorrect",
        success: false
             })
               }
        /// 3. if user exists and password is correct anssign JWT.

       const token =  jwt.sign({userId: user._id}, process.env.Secret_Key, {expiresIn: "1d"})
    // console.log("user logged in")
        res.send({
            message: "User Logged in Succesfully",
            success: true,
            token: token
        })
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