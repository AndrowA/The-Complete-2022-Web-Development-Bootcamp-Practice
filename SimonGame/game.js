var gameStarted = false;

var level = 0;

var userClickPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);


  $("#" + randomChosenColour).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);

  playSound(randomChosenColour);

  $("h1").text("Level " + level);

  level++;
}

$(".btn").click(function() {
  userChosenColour = this.id;
  userClickPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickPattern.length - 1)
})

function playSound(sound) {

  var audio = new Audio("sounds/" + sound + ".mp3")
  audio.play();

}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


$(document).keypress(function() {
  if (gameStarted == false){
    gameStarted = true;
    nextSequence();
  }
})

function checkAnswer(currentLevel){
  if (userClickPattern[currentLevel] === gamePattern[currentLevel]){

    if(gamePattern.length === userClickPattern.length){
      setTimeout(function () {
        nextSequence()
        userClickPattern = [];
      }, 1000);
    }
  }
  else{
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();

  }
}

function startOver(){
  gameStarted = false;

  gamePattern = [];

  userClickPattern = [];

  level = 0;
}
