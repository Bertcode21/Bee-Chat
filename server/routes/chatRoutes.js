const express = require('express');

const chatControl = require('./../controllers/chatController');
const authMiddleware = require("./../middleware/authMiddleware");

const router = express.Router();

router.route('/create-new-chat')
        .post(authMiddleware, chatControl.CreateChat);

router.route('/get-all-chats')
        .get(authMiddleware, chatControl.GetAllChat);

module.exports = router;