const Question = require('../models/question');

module.exports = {
    getRandomQuestion,
    seedQuestions
}

async function getRandomQuestion(req, res) {
    const rndm = Math.floor(Math.random() * 7);
    const question = (await Question.findOne().skip(rndm));
    res.status(200).json(question);
}

function seedQuestions(req, res) {
    const questions = [
        {question: "why is react so dumb", answer: "it is what it is"},
        {question: "What is the acronym of HTML", answer: "Hyper Text Markup Language"}
    ]

    for (const question of questions) {
        let newQuestion = new Question(question);
        newQuestion.save();
    }
    res.send('Database Seeded');
}
