const express = require('express');
const router = express.Router();

const wordController = require('../controllers/wordController');

router.post('/upload-words', wordController.uploadWords);

router.get('/get-word', wordController.getWord);

module.exports = router;