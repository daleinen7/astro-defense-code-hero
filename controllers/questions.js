const Question = require('../models/question');

module.exports = {
    getRandomQuestion,
    seedQuestions
}

async function getRandomQuestion(req, res) {
    const rndm = Math.floor(Math.random() * 17);
    const question = (await Question.findOne().skip(rndm));
    res.status(200).json(question);
}

function seedQuestions(req, res) {
    const questions = [
        {question: "what does HTML stand for", answer: "[Hh]yper [Tt]ext [Mm]arkup [Ll]anguage", score: 1},
        {question: "What is the acronym of CSS stand for", answer: "[Cc]ascading [Ss]tyle [Ss]heets?", score: 1},
        {question: "How many heading tags are there?", answer: "6|[Ss]ix", score: 1},
        {question: "enter a line break tag", answer: "<br ?/?>", score: 1},
        {question: "enter an opening tag for a list with numbers", answer: "<ol>", score: 1},
        {question: "enter the opening tag of where a CSS link tag should go in", answer: "<head>", score: 1},
        {question: "write a line of CSS to make an element have no underline", answer: "text-decoration: ?none;", score: 1},
        {question: "in one line of CSS make the right side of a border-width 2px and all other sides 1px", answer: "border-width: ?1px 2px 1px 1px;", score: 1},
        {question: "write a CSS selector that selects ONLY the p tag children of elements with a class of 'duck'", answer: ".duck > p", score: 1},
        {question: "does this line contain parameters or arguments: function question(num, str)", answer: "[Pp]arameters", score: 1},
        {question: "does this line contain parameters or arguments: question('num', 'str')", answer: "[Aa]rguments", score: 1},
        {question: "What does the following expression evaluate to: (0 != 7 || 'red' == 'blue')", answer: "true|True|TRUE", score: 1},
        {question: "What does the following expresion evalutate to: (true && 7)", answer: "7", score: 1},
        {question: "what attribute should you add to a script tag if you'd like it executed after the page finishes parsing", answer: "defer", score: 1},
        {question: "write the first line defining a function called 'this_function' with a parameter of 'str' in python", answer: "def this_function('str'):", score: 1},
        {question: "what collection type in python are NOT mutable", answer: "[Tt]uples?", score: 1},
        {question: "what statement stops a loop before reaching it's end in python", answer: "break", score: 1}
    ]

    for (const question of questions) {
        let newQuestion = new Question(question);
        newQuestion.save();
    }
    res.send('Database Seeded');
}
