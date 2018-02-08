const Question = require('./questionMaker.js');
let allQuestions = [];
function addQuestions(array){
    array = makeOneToTens(allQuestions.length, array);
    array.forEach(function(obj){
        allQuestions.push(obj);
    })
};
// function to make 10 scale of 1-10 questions for testing
function makeOneToTens(startCount, array){
    let answerArray = ["1 (Definitely NOT!)","2","3","4","5","6","7","8","9","10 (MOST Definitely!"];
    let count = startCount;
    return array.map(function(each){
        count++;
        return new Question(count, each.thing, each.imgurl, answerArray);
    });
};
// array to hold them questions (as an example rate social medias)
let socialMedias = [
    {
        thing:"Facebook",
        imgurl:"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Facebook-likes-box.png/1208px-Facebook-likes-box.png"
    },
    {
        thing:"Twitter",
        imgurl:"https://c1.staticflickr.com/9/8509/8477893426_e4bd8aa5df_b.jpg",
    },
    {
        thing: "Pinterest",
        imgurl: ""
    },
    {
        thing: "Google",
        imgurl: "https://lh5.ggpht.com/sYrNACiQJFksu3SQnnJYrhk4dGvQCiNJmiu-FAqT5Z_TWp0DhOsTTAS9Pb0ZZLiYM0y-Ac8MxVMcggpohPU0ca2t1T4q=s0",
    },
    {
        thing: "Snapchat",
        imgurl: "",
    },
    {
        thing: "Instagram",
        imgurl: "",
    },
    {
        thing:"Tinder",
        imgurl: "",
    },
    {
        thing: "PayPal",
        imgurl: "",
    },
    {
        thing:"Reddit",
        imgurl:"",
    },
    {
        thing: "Craigslist",
        imgurl: "",
    },
];
addQuestions(socialMedias);
module.exports = allQuestions;