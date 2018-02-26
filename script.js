$(document).ready(function () {

  var myVar = setInterval(myTimer, 1000);

  function myTimer() {
    var d = new Date();
    document.getElementById("time_local").innerHTML = d.toLocaleTimeString();
  }

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