const express = require('express');
const {addNewPost } = require('../controllers/adposts');

const router = express.Router();

router.post('/', addNewPost);


module.exports = router;