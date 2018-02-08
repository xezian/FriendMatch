// looking to export a contructor for new questions here
const Question = function(number, question, pictureUrl) {
    this.questionId = number;
    this.question = question;
    this.pictureUrl = pictureUrl;
};
// exporter
module.exports = Question;