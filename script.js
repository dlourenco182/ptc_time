$(document).ready(function() {
  $(".menu_pomodoro").click(function() {
    $(".center_action").css("background-color", "red");
  });
  $(".menu_timer").click(function() {
    $(".center_action").css("background-color", "green");
  });
  $(".menu_countdown").click(function() {
    $(".center_action").css("background-color", "blue");
  });
});
