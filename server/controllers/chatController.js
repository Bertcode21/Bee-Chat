const Chats = require('./../models/ChatModel');
const asyncErrorHandler = require('../middleware/asyncErrorHandler');


exports.CreateChat = asyncErrorHandler (async (req, res) =>{
try{
    const newChat = new Chats(req.body);
   const savedchat =  await newChat.save();
  
   return res.status(200).send({
    message: "Chat created successfully",
    success: true,
    data: savedchat
   })

}catch(error){
    return res.status(500).send({
        message: "Error in creating chat",
        success: false,
        error: error.message
    })
}
})

exports.GetAllChat = asyncErrorHandler (async (req, res) =>{
    try{
        const allChats = await Chats.find({ members: { $in: [req.user.id || req.user.userId] } })

        return res.status(200).send({
            message: "Chats fetched successfully",
            success: true,
            data: allChats
        })
    }catch(error){
        console.log("Error in GetAllChat:", error);
        return res.status(500).send({
            message: "Error in fetching chats",
            success: false,
            error: error.message
        })
    }
})