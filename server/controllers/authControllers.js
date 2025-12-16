const Users = require('./../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncErrorHandler = require('./../middleware/asyncErrorHandler');

exports.signup = asyncErrorHandler( async (req,res)=>{
    res.send("User Signup Succesfully")
})
exports.login = asyncErrorHandler(async (req, res) =>{
    res.send("User Login Succesfully")
})

exports.logout = asyncErrorHandler( async (req, res) =>{
        res.send("User Logout Succesfully")
})