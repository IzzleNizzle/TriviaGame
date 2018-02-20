// Variable for first answer

var firstAnswer; 

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

  // Build instructions for the user.
  var instructions = $("<div id='instructions'>Select the correct answers before the timer runs out. If you run out of time your scores will be calculated ONLY off of the answers you have completed.</div></br>");
  $('#main-content').append(instructions);
  
  

  // Builds Question 1, Question 2, Question 3, Question 4
  for (i = 0; i < 2; i++) {
    // Builds Line Break for spacing
    var lineBreak = $("<br>");
    var question = $("<div>");
    question.html(trivia[i].question);
    $("#main-content").append(question);
    $("#main-content").append(lineBreak);
    var answers = $("<form>");
    // answers.append("<form id='trivia-questions" + i + "'> <div><input type='radio' id='contactChoice1' name='contact' value='" + trivia[i].possAnswers[0] + "'><label for='contactChoice1'>" + trivia[i].possAnswers[0] + "</label>    <input type='radio' id='contactChoice2'           name='contact' value='" + trivia[i].possAnswers[1] + "'>    <label for='contactChoice2'>" + trivia[i].possAnswers[1] + "</label>    <input type='radio' id='contactChoice3'           name='contact' value='" + trivia[i].possAnswers[2] + "'>    <label for='contactChoice3'>" + trivia[i].possAnswers[2] + "</label> <input type='radio' id='contactChoice4' name='contact' value='" + trivia[i].possAnswers[3] + "'><label for='contactChoice1'>" + trivia[i].possAnswers[3] + "</label> </div>  <div>    <button type='submit'>Submit</button>  </div></form>");
    answers.attr("id", "trivia-question" + i);
    answers.text("hello");

    $("#main-content").append(answers);


  }

  // $('#main-content').append("<form id='trivia-questions'><p>Please select your preferred contact method:</p><div><input type='radio' id='contactChoice1' name='contact' value='email'><label for='contactChoice1'>Email</label>    <input type='radio' id='contactChoice2'           name='contact' value='phone'>    <label for='contactChoice2'>Phone</label>    <input type='radio' id='contactChoice3'           name='contact' value='mail'>    <label for='contactChoice3'>Mail</label>  </div>  <div>    <button type='submit'>Submit</button>  </div></form>");

  // var form = document.querySelector("form");
  
  
  // form.addEventListener("submit", function(event) {
  //   var data = new FormData(form);
  //   // console.log(data);
  //   var output = "";
  //   for (const entry of data) {
  //     output = entry[0] + "=" + entry[1] + "\r";
  //   };
  //   // console.log(data);
  //   console.log(output);
  //   event.preventDefault();
  //   var q1 = $("#contactChoice1").val();

  //   console.log(q1);
  // }, false);

  var form = document.querySelector("form");
  
  
  form.addEventListener("submit", function(event) {
      event.preventDefault();
    buildEndPage();
  }, false);

  $('#trivia-questions input').on('change', function() {
    firstAnswer = ($('input[name=contact]:checked', '#trivia-questions').val()); 
 });

 
}




// Function to build End Page
function buildEndPage (){
  // $('#main-content').empty();
  // $('#main-content').html("Testing for my purposes");
  console.log("You have run out of time!");
  console.log(firstAnswer);

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
        buildEndPage();
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


