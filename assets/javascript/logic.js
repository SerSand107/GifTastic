$(document).ready(function() {

    // Initial array of Marvel
    var topics = ["Spider Man", "Captain American", "Iron Man", "Doctor Strange", "Gurdians Of The Gardians", "Ant Man", "The Incredible Hulk"];
    
    function renderButtons() {

        var hero = $(this).attr("data-hero");

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hero + "&api_key=rDQw1tJtjhivwIgnp22p8ghDTZAvYy5l=10";

        // Performing our AJAX GET request
        $.ajax({
        url: queryURL,
        method: "GET"
        })
    }
















});