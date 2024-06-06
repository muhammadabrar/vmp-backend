const express = require('express');
const { register, login, verifyOTP } = require('../controllers/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verification', verifyOTP);


module.exports = router;