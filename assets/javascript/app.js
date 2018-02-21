// Variable for first answer

var answer1 = null;
var answer2 = null;
var answer3 = null;
var answer4 = null;

// Vars for final results
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Variables for rows
// var row1 = $("#row1");
// var row2 = $("#row2");
// var row3 = $("#row3");
// var row4 = $("#row4");

// Array for trivia questions
var trivia = [{
  "question": "Which of the following was not a team that competed in teh MLG tournaments?",
  "possAnswers": ["Final Boss", "Str8 Rippin", "Space Scrapers", "Team Carbon"]
}, {
  "question": "Which of the following were not players in teh MLG tournament scene?",
  "possAnswers": ["Naded", "Ogre 2", "Bossman", "Pistola"]
}, {
  "question": "Which of the following were not custom made maps for MLG?",
  "possAnswers": ["The Pit", "Construct", "Narrows", "Onslaught"]
}, {
  "question": "How big were regular matches in Halo 3 MLG Team Games?",
  "possAnswers": [2, 4, 6, 8]
}]
//  Variable that will hold our setInterval that runs the timer
var intervalId;
//prevents the clock from being sped up unnecessarily
var clockRunning = false;
// jQuery object for start button
var startButton = $("<button>");

$(document).ready(function () {

  $("#main-content").append(startButton.text("Start"));
  $("#row1").hide();
  $("#row2").hide();
  $("#row3").hide();
  $("#row4").hide();
});

// Function for start button
$(startButton).on("click", function () {

  // $("#main-content").empty();
  // $("#row1").show();


  buildGamePage();

});

// Function to build Trivia Game Page
function buildGamePage() {

  // Clears contents so i can push new data
  $('#main-content').empty();
  $("#row1").show();
  $("#row2").show();
  $("#row3").show();
  $("#row4").show();
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
  for (i = 0; i < 4; i++) {
    // Builds Line Break for spacing
    var lineBreak = $("<br>");
    var question = $("<div>");
    question.html(trivia[i].question);
    $("#row" + (i + 1)).append(question);
    // $("#main-content").append(lineBreak);

    // answers.append("<form id='trivia-questions" + i + "'> <div><input type='radio' id='contactChoice1' name='contact' value='" + trivia[i].possAnswers[0] + "'><label for='contactChoice1'>" + trivia[i].possAnswers[0] + "</label>    <input type='radio' id='contactChoice2'           name='contact' value='" + trivia[i].possAnswers[1] + "'>    <label for='contactChoice2'>" + trivia[i].possAnswers[1] + "</label>    <input type='radio' id='contactChoice3'           name='contact' value='" + trivia[i].possAnswers[2] + "'>    <label for='contactChoice3'>" + trivia[i].possAnswers[2] + "</label> <input type='radio' id='contactChoice4' name='contact' value='" + trivia[i].possAnswers[3] + "'><label for='contactChoice1'>" + trivia[i].possAnswers[3] + "</label> </div>  <div>    <button type='submit'>Submit</button>  </div></form>");

    // $("#row" + (i + 1)).append("<div>");
    var divRow = $("<div class='test" + i + "'>");
    var answers = $("<form>");
    answers.attr("id", "trivia-question" + i);

    for (j = 0; j < 4; j++) {
      
      // answers.append("<div>");
      answers.append("<input type='radio' name='contact' value='" + trivia[i].possAnswers[j] + "'><label for='contactChoice" + j + "'>" + trivia[i].possAnswers[j] + "</label>");

      
    }
    divRow.append(answers);
    // var startButton = $("<button type='submit'>Submit</button>");
    // answers.append(startButton);
    $("#row" + (i + 1)).append(divRow);
  }


  // Checking for answers and storing them into global variables

  $('#trivia-question0 input').on('change', function () {
    answer1 = $("input[name='contact']:checked", '#trivia-question0').val();
  });

  $('#trivia-question1 input').on('change', function () {
    answer2 = ($('input[name=contact]:checked', '#trivia-question1').val());
  });

  $('#trivia-question2 input').on('change', function () {
    answer3 = ($('input[name=contact]:checked', '#trivia-question2').val());
  });

  $('#trivia-question3 input').on('change', function () {
    answer4 = ($('input[name=contact]:checked', '#trivia-question3').val());
  });

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


  form.addEventListener("submit", function (event) {
    event.preventDefault();
    buildEndPage();
  }, false);




}




// Function to build End Page
function buildEndPage() {
  // $('#main-content').empty();
  // $('#main-content').html("Testing for my purposes");
  console.log("You have run out of time!");
  
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  console.log(answer4);
  processInput();
  $("#main-content").empty();
  $("#row1").empty();
  $("#row2").hide();
  $("#row3").hide();
  $("#row4").hide();
  $("#main-content").text("Here are your results!");
  $("#row1").text("Correct Answers: " + correct + " Incorrect Answers: " + incorrect + " Unanswered Questions: " + unanswered);

}


function processInput() {
  if (answer1 === "Space Scrapers"){
    correct++;
  }else if(answer1 === null){
    unanswered++;
  }else{
    incorrect++;
  };

  if (answer2 === "Bossman"){
    correct++;
  }else if(answer2 === null){
    unanswered++;
  }else{
    incorrect++;
  };

  if (answer3 === "Onslaught"){
    correct++;
  }else if(answer3 === null){
    unanswered++;
  }else{
    incorrect++;
  }
  if (answer4 === "4"){
    correct++;
  }else if(answer4 === null){
    unanswered++;
  }else{
    incorrect++;
  }
}



// Create a timer for the game to run by
var stopwatch = {

  time: 90,

  reset: function () {

    // Stop's timer and sets time to zero, as well as prints beginning to the page
    stopwatch.stop();
    stopwatch.time = 0;
    $('#timer').text("00:00");

  },

  start: function () {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 100);
      clockRunning = true;
    }
  },

  stop: function () {

    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function () {

    // Check to see if time is zero and if so stop the timer and send message
    if (stopwatch.time === 0) {
      stopwatch.stop();
      buildEndPage();
    } else {

      stopwatch.time--;
      var var2 = stopwatch.timeConverter(stopwatch.time);
      $('#timer').text(var2);
    }



  },


  timeConverter: function (t) {

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


