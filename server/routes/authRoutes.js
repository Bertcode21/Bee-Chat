const express = require('express');
const authcontrol = require('./../controllers/authControllers')
const authMiddleware = require("./../middleware/authMiddleware")
const router = express.Router();

router.route('/signup')
       .post(authcontrol.signup)
router.route('/login')
       .post(authcontrol.login)
router.route('/logout')
       .get(authcontrol.logout)


module.exports = router;


