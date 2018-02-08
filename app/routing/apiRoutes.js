// data dependancies
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
        friendData.forEach(function(friend){
            let friendScore = 0;
            for (let j = 0; j < friend.answers.length; j++) {
                let distance = friend.answers[j] - req.body.answers[j];
                distance = Math.abs(distance);
                friendScore = friendScore + distance;
            };
            if(friendScore < lowScore) {
                topMatch = friend;
                lowScore = friendScore;
            };
        });
        console.log(topMatch);
        friendData.push(req.body);
        res.json(topMatch);
    });
};