$(document).ready(function () {

  var myVar = setInterval(myTimer, 1000);
  var hoursLabel = document.getElementById("hours");
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;
  var myTimer = null;

  function myTimer() {
    var d = new Date();
    document.getElementById("time_local").innerHTML = d.toLocaleTimeString();
  }


  $("#start_button").click(function () {

    myTimer = setInterval(setTimer, 1000);

    function setTimer() {
      ++totalSeconds;
      secondsLabel.innerHTML = lapdigit(totalSeconds % 60);
      minutesLabel.innerHTML = lapdigit(parseInt(totalSeconds / 60));
    }

    function lapdigit(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }

  });

  $("#pause_button").click(function () {
    clearInterval(myTimer);
    timer = null;
  });
  
  $("#reset_button").click(function () {
    var hoursLabel = document.getElementById("hours");
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    hoursLabel.innerHTML = '00';
    minutesLabel.innerHTML = '00';
    secondsLabel.innerHTML = '00';
    totalSeconds = 0;
  });

  $(".menu_pomodoro").click(function () {
    $(".center_action").css("background-color", "red");
  });
  $(".menu_timer").click(function () {
    $(".center_action").css("background-color", "green");
  });
  $(".menu_countdown").click(function () {
    $(".center_action").css("background-color", "blue");
  });
});