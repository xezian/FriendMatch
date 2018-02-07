// npm dependancies
const express = require("express");
const bodyParser = require("body-parser");

// set up express app 
const app = express();
const PORT = process.env.PORT || 3000;

// sets up body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// points the server to the routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener for connection 
app.listen(PORT, function(){
    console.log(`App listening on PORT http://localhost:${PORT}`)
});