const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    question: String,
    answer: String,
    score: Number
});

module.exports = mongoose.model("Question", questionSchema);