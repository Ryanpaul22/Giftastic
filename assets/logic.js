var authKey = "9SXhUwZ0449ny6ZBltDsbmROoTxeTBEQ";

var topics = ["dog", "cat", "pig", "sheep", "horse"]

var form = "";

var queryURLbase = "http://api.giphy.com/v1/gifs/search?q=" + "&api_key=" + authKey + "&limit=10";


function addBtn () {
  for (var i = 0; i < topics.length; i++) {
    document.getElementById("more").innerHTML += "<button>" + topics[i] + "</button>";
  }
}

addBtn();

$.ajax({
  url: queryURL,
  method: "GET"
})
  
  .then(function(response) {
    console.log(queryURL);

    console.log(response);
    
    var results = response.data;

    
    for (var i = 0; i < results.length; i++) {

      
      var animalDiv = $("<div>");

      
      var p = $("<p>").text("Rating: " + results[i].rating);


      
      $("#gifs-appear-here").prepend(animalDiv);
    }
  });

  $(".gif").on("click", function() {
    
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });