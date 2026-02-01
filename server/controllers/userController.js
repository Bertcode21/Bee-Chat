const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const Users = require('../models/userModel');



exports.GetLoggedUser = asyncErrorHandler( async (req, res )=>{
 try{
    // get the looged in user logic from our backend
    const userId = req.user.id || req.user.userId; // depending on how you stored it
        const user = await Users.findById(userId);
      res.send({
        message: "Logged in user fetched successfully",
        success: true,
        data: user
      })

 }catch(error){
   res.send({
    message: "Error in fetching logged user",
    success: false,
    error: error.message
   })
 }
})

exports.GetAllUsers = asyncErrorHandler( async (req, res )=>{ 
    try{
    const userId = req.user.id || req.user.userId; // depending on how you stored it
        const Alluser = await Users.find({_id: {$ne: userId}});
    res.send({
        message: "All users fetched successfully",
        success: true,
        data: Alluser
      })
    }catch(error){
        res.send({
        message: "Error in fetching all users",
        success: false,
        error: error.message
        })
    }
})