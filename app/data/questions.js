const Question = require('./questionMaker.js');
// it starts out empty!
let allQuestions = [];
// function that counts add new questions to the allQuestions counting up from the lenth for ID#
function addQuestions(array){
    array = makeOneToTens(allQuestions.length, array);
    array.forEach(function(obj){
        allQuestions.push(obj);
    })
};
// function to make 10 scale of 1-10 questions for testing
function makeOneToTens(startCount, array){
    let count = startCount;
    return array.map(function(each){
        count++;
        return new Question(count, each.thing, each.imgurl);
    });
};
// array to hold them questions (as an example rate social medias)
let socialMedias = [
    {
        thing:"Facebook",
        imgurl:"images/Facebook-likes-box.png"
    },
    {
        thing:"Twitter",
        imgurl:"images/Twitter-phone-pole.jpg",
    },
    {
        thing: "Pinterest",
        imgurl: "images/Pinterest-as-flower.jpg"
    },
    {
        thing: "Google",
        imgurl: "images/Google-badly-drawn.png",
    },
    {
        thing: "Snapchat",
        imgurl: "images/Snapchat-warp-speed.jpg",
    },
    {
        thing: "Instagram",
        imgurl: "images/Instagram-with-person.jpg",
    },
    {
        thing:"Yahoo",
        imgurl: "images/Yahoo-purple-cow.jpg",
    },
    {
        thing: "PayPal",
        imgurl: "images/PayPal-on-halo.jpg",
    },
    {
        thing:"Reddit",
        imgurl:"images/Reddit-in-circle.jpg",
    },
    {
        thing: "Craigslist",
        imgurl: "images/Craigslist-headquarters.jpg",
    },
];
// use the socialMedias as questions
addQuestions(socialMedias);
// export all questions
module.exports = allQuestions;