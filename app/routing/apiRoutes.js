// friend data dependancies
let friendData = require("../data/friends");
// routing for api data the app relies on
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function(req, res){
        // loop logic to handle compatability testing
        let highScore = 0;
        let topMatch;
        for (let i = 0; i < friendData.length; i++){
            let friendScore = 0;
            for (let j = 0; j < friendData[i].answers.length; j++) {
                if(req.body.answers[j]===friendData[i].answers[j]){
                    friendScore++;    
                }
            };
            if(friendScore > highScore) {
                topMatch = friendData[i];
                highScore = friendScore;
            };
        };
        friendData.push(req.body);
        res.json(topMatch);
    });
};