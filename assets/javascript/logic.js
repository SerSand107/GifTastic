$(document).ready(function() {

    // Initial array of Marvel
    var topics = ["Spider Man", "Captain America", "Iron Man", "The Incredible Hulk"];
    
    function displayMarvelGif() {

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var limits = 1; 
		var key = "rDQw1tJtjhivwIgnp22p8ghDTZAvYy5l"; 
		var search = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ search + "&api_key=" + key + "&limit=" + limits;

        console.log(queryURL);

        // Performing our AJAX GET request
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response);
            
    //Click event on button with id of "show" executes displayNetflixShow function
    // $(document).on("click", "#heroes", displayMarvelGif);

    //Click event on gifs with class of "netflixGiphy" executes pausePlayGifs function
    // $(document).on("click", ".marvelHeroGiphy", pausePlayGifs);

    //Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
    // function pausePlayGifs() {
    //     var state = $(this).attr("data-state");
    //     if (state === "still") {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-state", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-state", "still");
    //     }
    // }
    })
    }
    displayMarvelGif();
});