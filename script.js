$(document).ready(function () {

  var something = setInterval(progressbar_timer,1000);
  $(".form_timer").hide();
  var myVar = setInterval(myTimer, 1000);
  var hoursLabel = document.getElementById("hours");
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;
  var progressbar_timer = null;
  var myTimer = null;

  function myTimer() {
    var d = new Date();
    document.getElementById("time_local").innerHTML = d.toLocaleTimeString();
  }

  function progressbar_timer() {
    var progress = Math.round($(".progress-bar-striped.active").width());
    progress = Math.round((progress+100)/10)+'%';
    if(progress ==100){clearInterval(progressbar_timer);}else{
    $(".progress-bar-striped").css("width",progress);
    $(".progress-bar-striped")[0].innerHTML = progress;}
  }

  $("#start_button").click(function () {

    if (jQuery.inArray("active", $('.menu_timer')[0].classList) > 0) {

      var hours = 6;
      var minutes = 6;
      var seconds = 6;

      myTimer = setInterval(setTimer, 1000);

      function setTimer() {

        seconds--;

        if (hours == 0 && minutes == 0 && seconds == 0) {
          alert('success');
        }

        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours <= 9) {
              hours = '0' + hours;
            }

          }
          if (minutes <= 9) {
            minutes = '0' + minutes;
          }
        }

        if (seconds <= 9) {
          seconds = '0' + seconds;
        }

        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("hours").innerHTML = hours;

      }




    } else {
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

  $("#info_button").click(function () {


  });

  $(".menu_pomodoro").click(function () {
    $(".card-body").css("background-color", "red");
  });
  $(".menu_timer").click(function () {
    $(".card-body").css("background-color", "green");

  });
  $(".menu_countdown").click(function () {
    $(".card-body").css("background-color", "blue");
  });
});