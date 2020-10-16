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
        {question: "What is the acronym of HTML stand for", answer: "Hyper Text Markup Language"},
        {question: "What is the acronym of CSS stand for", answer: "Cascading Style Sheets"},
        {question: "How many heading tags are there?", answer: "6"},
        {question: "enter a line break tag", answer: "<br/>"},
        {question: "enter an opening tag for a list with numbers", answer: "<ol>"},
        {question: "enter the opening tag where a CSS file should be linked", answer: "<head>"},
        {question: "type the word 'comment' and then comment it out in CSS", answer: "/* comment */"},
        {question: "write a line of CSS to make an element have no underline", answer: "text-decoration: none;"},
        {question: "in one line of CSS make the right side of a border-width 2px and all other sides 1px", answer: "border-width: 1px, 2px, 1px, 1px;"},
        {question: "write a CSS selector that selects ONLY the p tag children of elements with a class of 'duck'", answer: ".duck > p"},
        {question: "does this line contain parameters or arguments: function question(num, str)", answer: "parameters"},
        {question: "does this line contain parameters or arguments: question('num', 'str')", answer: "arguments"},
        {question: "What does the following expression evaluate to: (0 != 7 || 'red' == 'blue')", answer: "true"},
        {question: "What does the following expresion evalutate to: (true && 7)", answer: "7"},
        {question: "what attribute should you add to a script tag if you'd like it executed after the page finishes parsing", answer: "defer"},
        {question: "write the first line defining a function called 'this_function' with a parameter of 'str' in python"
        , answer: "def this_function('str'):"},
        {question: "what collection type in python are NOT mutable (plural)", answer: "tuples"},
        {question: "what statement stops a loop before reaching it's end in python", answer: "break"},

    ]

    for (const question of questions) {
        let newQuestion = new Question(question);
        newQuestion.save();
    }
    res.send('Database Seeded');
}
