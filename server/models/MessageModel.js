const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    chatId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "chats"
    }, sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})