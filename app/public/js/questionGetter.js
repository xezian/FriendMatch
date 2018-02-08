function makeQuestions(){
    console.log("hello I am questionMaker.js");
    // it's time to build a question for the question MODAL
    $(document).on("click", "#start", function(event){
        event.preventDefault();
        $.get("/api/questions", function(data){
            if($("#friend-name").val().trim()===""||$("#picture-link").val().trim()==="") {
                alert("Please fill in the required INFORMATION! Thank you my friend.");
                return;
            } else {
                $("#first-input").css({"visibility": "hidden"});
                oneQuestion(data);
            }
        })
    });
    // and then activate the result submission listener
    resultsSubmit();
};
function oneQuestion(data){
    let count = 0;
    $("#thing").text(data[count].question + " ?");
    let image = $("<img>");
    image
        .attr("src", data[count].pictureUrl)
        .attr("alt", ":( no picture")
        .css({"display":"inline-block","margin":"0 auto","max-width":"500px","max-height":"395px","width":"auto","height":"auto"})
        .appendTo($("#question-picture-spot"));
    $(".questions-modal").modal("toggle");
};