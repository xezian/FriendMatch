function resultsSubmit(answers){
    console.log("hello I am submitResults.js");
    // front end JavaScript to submit survey results
    $(document).on("click", "#submit", function(event) {
        event.preventDefault();
        $(".submit-modal").modal("toggle");
        // Here we grab the form elements
        let newFriend = {
            friendName: $("#friend-name").val().trim(),
            pictureLink: $("#picture-link").val().trim(),
            answers: answers,
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
                .css({"display":"inline-block","margin":"20px auto","max-width":"500px","max-height":"250px","width":"auto","height":"auto"})
                .attr("src", data.pictureLink)
                .attr("alt", data.friendName)
                .appendTo($("#picture-spot"));            
        });
        $(".results-modal").modal("toggle");
    });
};