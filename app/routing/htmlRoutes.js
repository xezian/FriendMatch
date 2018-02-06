// built in dependancies
const path = require("path");

// handles routing for client-side to visit either home.html or survey.html
module.exports = function(app) {
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};