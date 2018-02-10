function makeQuestions(){
    console.log("hello I am questionMaker.js");
    // show the name and picture link inputs 
    $(".begin-modal").modal("toggle");
    let todaysAnswers = [];
    // it's time to build a question for the question MODAL
    $(document).on("click", "#start", function(event){
        event.preventDefault();
        // counter for the questions as we ask them
        let questionCount = 0;
        // get route from /api/questions where all the questions are stored
        $.get("/api/questions", function(data){
            // checks inputs to make certain that there is SOMETHING there
            if($("#friend-name").val().trim()===""||$("#picture-link").val().trim()==="") {
                alert("Please fill in the required INFORMATION! Thank you my friend.");
                return;
            } else {
                // hide the name and picture link inputs 
                $(".begin-modal").modal("toggle");
                // adds buttons to the (hidden) answers modal
                let buttons = makeButtons();
                $("#answers").append(buttons);
                // ask the first question
                oneQuestion(data[questionCount]);
                // click listener for answer
                $(document).on("click", ".color-button", function(event){
                    // pushes the value of each answer to an array
                    todaysAnswers.push($(this).attr("val"));
                    // the below code would push objects to the array which include two values: question ID and answer
                    // todaysAnswers.push({
                    //     answer: $(this).attr("val"),
                    //     questionId: data[questionCount].questionId
                    // });
                    // checks if we've reached the end of the questions yet
                    if(questionCount >= data.length - 1) {
                        // hide the questions modal
                        $(".questions-modal").modal("toggle");
                        // show the submit your answers modal (listener in submitResults)
                        $(".submit-modal").modal("toggle");
                        return;
                    } else {
                        // ask another question
                        questionCount++;
                        $(".questions-modal").modal("toggle");
                        // set timeout ensures the modal doesn't get stuck in between toggles
                        setTimeout(function(){
                            oneQuestion(data[questionCount]);
                        }, 600);
                    }
                });
            }
        })
    });
    // and then activate the result submission listener
    resultsSubmit(todaysAnswers);
};
function oneQuestion(data){
    // clears the modal and fills it in with a question and picture
    $("#thing").empty();
    $("#question-picture-spot").empty();
    $("#thing").text(data.question + " ?");
    let image = $("<img>");
    image
        .attr("src", data.pictureUrl)
        .attr("alt", ":( no picture")
        .css({"display":"inline-block","margin":"20px auto","max-width":"500px","max-height":"250px","width":"auto","height":"auto"})
        .appendTo($("#question-picture-spot"));
    // now show the modal
    $(".questions-modal").modal("toggle");
};
function makeButtons(){
    // color array of CSS colors to make a ratings rainbow
    let colorArray = ["maroon","red","orange","goldenrod","yellow","limegreen","green","blue","indigo","violet"];
    let buttonsDiv = $("<div>");
    buttonsDiv
        .css({"display":"inline-block","margin":"0 auto","height":"50px","width":"60vw","overflow-x":"scroll","overflow-y":"hidden","white-space":"nowrap"});
    // poo to further clarify the rating spectrum
    let poo = $("<button>");
    poo
        .attr("class", "btn")
        .css({"line-height":"100%","background-color":"transparent","height":"90%","margin":"2px","font-size":"30px"})
        .html("💩")
        .appendTo(buttonsDiv);
    // let's start the count outside the forEach
    let count = 1;
    // create each color button based on the colors array
    colorArray.forEach(function(color){
        let button = $("<button>");
        button
            .attr("val", count)
            .attr("class", "btn color-button")
            .css({"background-color":color,"color":"white","width":"50px","height":"90%","margin":"2px"})
            .html(count)
            .appendTo(buttonsDiv);
        count++;
    });
    // star as an alternative to poo
    let star = $("<button>");
    star
        .attr("class", "btn")
        .css({"line-height":"100%","background-color":"transparent","height":"90%","margin":"2px","font-size":"30px"})
        .html("🌟")
        .appendTo(buttonsDiv);
    return buttonsDiv;
};