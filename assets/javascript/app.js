// Array for trivia questions
var trivia = [{
  "question": "Which of the following was not a team that competed in teh MLG tournaments?",
  "possAnswers": ["Final Boss", "Str8 Rippin", "Space Scrapers", "Team Carbon"]
}, {
  "question": "Which of the following were not players in teh MLG tournament scene?",
  "possAnswers": ["Naded", "Ogre 2", "Bossman", "Pistola"]
}]
//  Variable that will hold our setInterval that runs the timer
var intervalId;
//prevents the clock from being sped up unnecessarily
var clockRunning = false;
// jQuery object for start button
var startButton = $("<button>");

$(document).ready(function() {

  $("#main-content").html(startButton.text("Start"));

});

// Function for start button
$(startButton).on("click", function(){
  
  buildGamePage();

});

// Function to build Trivia Game Page
function buildGamePage (){

  // Clears contents so i can push new data
  $('#main-content').empty();

  // build variable for timer and add to next page
  var timerObj = $("<div>");
  timerObj.attr("id", "timer");
  $('#main-content').prepend(timerObj);

  // Starts stopwatch
  stopwatch.start();

  // Builds Line Break for spacing
  

  // Builds Question 1, Question 2, Question 3, Question 4

  for (i = 0; i < 2; i++){
    var lineBreak = $("<br>");
    var question = $("<div>");
    question.html(trivia[i].question);
    $("#main-content").append(question);
    $("#main-content").append(lineBreak);
  }


  // var question1 = $("<div>");
  // var question2 = $("<div>");
  // var question3 = $("<div>");
  // var question4 = $("<div>");

  // question1.html(trivia)


}




// Function to build End Page
function buildEndPage (){

  $('#main-content').html("Testing for my purposes");

}






// Create a timer for the game to run by
var stopwatch = {

    time: 90,
      
    reset: function() {
      
      // Stop's timer and sets time to zero, as well as prints beginning to the page
      stopwatch.stop();
      stopwatch.time = 0;
      $('#timer').text("00:00");

    },
  
    start: function() {
  
        //  TODO: Use setInterval to start the count here and set the clock to running.
          intervalId = setInterval(stopwatch.count, 100);
          clockRunning = true;
          
    },

    stop: function() {
  
      //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
  
    count: function() {
  
      // Check to see if time is zero and if so stop the timer and send message
      if (stopwatch.time === 0){
        stopwatch.stop();
        console.log("You have run out of time!");
      }else{

        stopwatch.time--;
        var var2 = stopwatch.timeConverter(stopwatch.time);
        $('#timer').text(var2);
      }

      

    },

  
    timeConverter: function(t) {
  
      //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
  
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };


  // // Start timer for testing purposes
  // stopwatch.start();


