const express = require('express');
const router = express.Router();
const questionsCtrl = require('../../controllers/questions');

router.get('/', questionsCtrl.getRandomQuestion);
router.post('/seeds', questionsCtrl.seedQuestions);


module.exports = router;