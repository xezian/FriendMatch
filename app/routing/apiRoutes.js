// friend data dependancies
let friendData = require("../data/friends");
// routing for api data the app relies on
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function(req, res){
        // loop logic to handle compatability testing
        let lowScore = 100;
        let topMatch;
        for (let i = 0; i < friendData.length; i++){
            let friendScore = 0;
            for (let j = 0; j < friendData[i].answers.length; j++) {
                let distance = friendData[i].answers[j] - req.body.answers[j];
                distance = Math.abs(distance);
                friendScore = friendScore + distance;
            };
            if(friendScore < lowScore) {
                topMatch = friendData[i];
                lowScore = friendScore;
            };
        };
        console.log(topMatch);
        friendData.push(req.body);
        res.json(topMatch);
    });
};