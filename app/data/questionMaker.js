// looking to export a contructor for new questions here
const Question = function(number, question, pictureUrl, answers) {
    this.questionId = number;
    this.question = question;
    this.answers = answers;
    this.pictureUrl = pictureUrl;
    this.chosenAnswer = false;
};
// this is where we add the methods to the prototype on the constructor function
Question.prototype.answerQuestion = function(answer) {
    this.chosenAnswer = answer;
};
// exporter
module.exports = Question;