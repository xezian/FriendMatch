function makeQuestions(){
    console.log("hello I am questionMaker.js");
    let todaysAnswers = [];
    // it's time to build a question for the question MODAL
    $(document).on("click", "#start", function(event){
        event.preventDefault();
        let questionCount = 0;
        $.get("/api/questions", function(data){
            if($("#friend-name").val().trim()===""||$("#picture-link").val().trim()==="") {
                alert("Please fill in the required INFORMATION! Thank you my friend.");
                return;
            } else {
                $("#first-input").css({"visibility": "hidden"});
                oneQuestion(data[questionCount]);
                $(document).on("click", ".color-button", function(event){
                    todaysAnswers.push($(this).val());
                    // todaysAnswers.push({
                    //     answer: $(this).val(),
                    //     questionId: data[questionCount].questionId
                    // });
                    if(questionCount >= data.length - 1) {
                        $(".questions-modal").modal("toggle");
                        $(".submit-modal").modal("toggle");
                        return;
                    } else {
                        questionCount++;
                        $(".questions-modal").modal("toggle");
                    }
                    setTimeout(function(){
                        oneQuestion(data[questionCount]);
                    }, 1000);
                });
            }
        })
    });
    // and then activate the result submission listener
    resultsSubmit(todaysAnswers);
};
function oneQuestion(data){
    $("#answers").empty();
    $("#thing").empty();
    $("#question-picture-spot").empty();
    $("#thing").text(data.question + " ?");
    let image = $("<img>");
    image
        .attr("src", data.pictureUrl)
        .attr("alt", ":( no picture")
        .css({"display":"inline-block","margin":"0 auto","max-width":"500px","max-height":"250px","width":"auto","height":"auto"})
        .appendTo($("#question-picture-spot"));
    let buttons = makeButtons();
    $("#answers").append(buttons);
    $(".questions-modal").modal("toggle");
};
function makeButtons(){
    let colorArray = ["maroon","red","orange","goldenrod","yellow","limegreen","green","blue","indigo","violet"];
    let buttonsDiv = $("<div>");
    buttonsDiv
        .css({"display":"inline-block","margin":"0 auto","border":"3px dashed aliceblue","height":"50px","width":"60vw","overflow-x":"scroll","overflow-y":"hidden","white-space":"nowrap"});
    let count = 0;
    let poo = $("<button>");
    poo
        .attr("class", "btn")
        .css({"line-height":"100%","background-color":"white","height":"90%","margin":"2px","font-size":"30px"})
        .html("💩")
        .appendTo(buttonsDiv);
    colorArray.forEach(function(color){
        count++;
        let button = $("<button>");
        button
            .attr("val", count)
            .attr("class", "btn color-button")
            .css({"background-color":color,"height":"90%","margin":"2px"})
            .appendTo(buttonsDiv);
    });
    count++;
    let star = $("<button>");
    star
        .attr("class", "btn")
        .css({"line-height":"100%","background-color":"white","height":"90%","margin":"2px","font-size":"30px"})
        .html("🌟")
        .appendTo(buttonsDiv);
    return buttonsDiv;
};