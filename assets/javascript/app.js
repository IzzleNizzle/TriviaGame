
//  Variable that will hold our setInterval that runs the timer
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

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
        alert("You have run out of time!");
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


  // Start timer for testing purposes
  stopwatch.start();


