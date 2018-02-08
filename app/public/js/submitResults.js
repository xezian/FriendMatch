function resultsSubmit(){
    console.log("hello I am submitResults.js");
    // front end JavaScript to submit survey results
    $(document).on("click", "#submit", function(event) {
        event.preventDefault();
        // Here we grab the form elements
        let newFriend = {
            friendName: $("#friend-name").val().trim(),
            pictureLink: $("#picture-link").val(),
            answers: [],
        };
        // push answers into object
        for (let i = 1; i < 11; i++){
            newFriend.answers.push(parseInt($(`#question-${i}`).val()));
        };
        // let's see it (in the browser console)
        console.log(newFriend);
        // post your own data, and run a function with the data coming back (the friend who matches the best)
        $.post("/api/friends", newFriend, function(data) {
            console.log(data);
            $("#match-name")
                .text(data.friendName);
            let image = $("<img>");
            image
                .attr("src", data.pictureLink)
                .attr("alt", data.friendName)
                .appendTo($("#picture-spot"));            
        });
        $(".results-modal").modal("toggle");
    });
};