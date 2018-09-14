$(document).ready(function() {

    // Initial array of Marvel
    var topics = ["Spider Man", "Captain America", "Iron Man", "The Incredible Hulk"];
    
    function populateButtons (arrayName, buttonClass, area) {
        $(area).empty() 

        for (var i = 0; i < arrayName.length; i++) {
            var heroesMarvel = $("<button>")
            heroesMarvel.addClass(buttonClass)
            heroesMarvel.attr("data-type", arrayName[i])
            heroesMarvel.text(arrayName[i])
            $("#buttons-view").append(heroesMarvel);
        }
    }
    // populateButtons(topics, "hero-button", "#buttons-view");
    $(document).on("click", "#add-marvel", function() { 
    
        event.preventDefault();

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var limits = 10; 
        var key = "rDQw1tJtjhivwIgnp22p8ghDTZAvYy5l";
        var search = $("#marvel-input").val().replace(/\s+/g, '').trim();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ search + "&api_key=" + key + "&limit=" + limits;
        
        
        console.log(`This is the url: ${queryURL}`);
        console.log("Search Term" + search);
       
        // Performing our AJAX GET request
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            // console.log(response);
            var results = response.data;
            
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                // storing the data from the AJAX request in the results variable
                var url = results[i].images.fixed_height.url;
                var marvelDiv = $("<div class='marvelHeroes'>");
                var rating = results[i].rating;
                var heroImage = $("<img>");
                
                var p = $("<p>").text("Rating: " + results[i].rating);
                heroImage.attr("data-state", "still");
                heroImage.attr("data-animate", url);
                marvelDiv.append(p);
                marvellDiv.append(heroImage);
                $("#marvel-view").prepend(marvelDiv);

            }
            console.log(url);
            console.log(response);
        });
        
    //Click event on button with id of "show" executes  function
    // $(document).on("click", "#button-view", populateButtons);

    //Click event on gifs with class of "marvelHeroGiphy" executes pausePlayGifs function
    // $(document).on("click", ".marvelHeroGiphy", pausePlayGifs);

    // Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
        function pausePlayGifs() {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
                    populateButtons(topics, "hero-button", "#buttons-view")
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
                    populateButtons(topics, "hero-button", "#buttons-view")
            }
            
        }
    })
   
});