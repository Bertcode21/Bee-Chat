const express = require('express');
const userControl = require('./../controllers/userController')
const authMiddleware = require("./../middleware/authMiddleware")
const router = express.Router();

router.route('/get-logged-user')
      .get(authMiddleware, userControl.GetLoggedUser)
router.route('/get-all-users')
      .get(authMiddleware, userControl.GetAllUsers)
module.exports = router;