const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/upload-user', userController.uploadUser);

router.get('/get-user', userController.getUser);

module.exports = router;