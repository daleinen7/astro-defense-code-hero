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
        {question: "what does HTML stand for", answer: "[Hh]yper [Tt]ext [Mm]arkup [Ll]anguage"},
        {question: "What is the acronym of CSS stand for", answer: "[Cc]ascading [Ss]tyle [Ss]heets?"},
        {question: "How many heading tags are there?", answer: "6|[Ss]ix"},
        {question: "enter a line break tag", answer: "<br ?/?>"},
        {question: "enter an opening tag for a list with numbers", answer: "<ol>"},
        {question: "enter the opening tag of where a CSS link tag should go in", answer: "<head>"},
        {question: "write a line of CSS to make an element have no underline", answer: "text-decoration: ?none;"},
        {question: "in one line of CSS make the right side of a border-width 2px and all other sides 1px", answer: "border-width: ?1px 2px 1px 1px;"},
        {question: "write a CSS selector that selects ONLY the p tag children of elements with a class of 'duck'", answer: ".duck > p"},
        {question: "does this line contain parameters or arguments: function question(num, str)", answer: "[Pp]arameters"},
        {question: "does this line contain parameters or arguments: question('num', 'str')", answer: "[Aa]rguments"},
        {question: "What does the following expression evaluate to: (0 != 7 || 'red' == 'blue')", answer: "true|True|TRUE"},
        {question: "What does the following expresion evalutate to: (true && 7)", answer: "7"},
        {question: "what attribute should you add to a script tag if you'd like it executed after the page finishes parsing", answer: "defer"},
        {question: "write the first line defining a function called 'this_function' with a parameter of 'str' in python", answer: "def this_function('str'):"},
        {question: "what collection type in python are NOT mutable", answer: "[Tt]uples?"},
        {question: "what statement stops a loop before reaching it's end in python", answer: "break"}
    ]

    for (const question of questions) {
        let newQuestion = new Question(question);
        newQuestion.save();
    }
    res.send('Database Seeded');
}
