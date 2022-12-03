var timeEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");

startButton.addEventListener("click", startGame);

function startGame(){
    // set timer
    setTime();
    // hide startScreen
    startScreen.setAttribute("class", "hide");
    // show first question
    
}

function setTime(){
    secondsLeft = 70;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to Show score;
        }
    
    }, 1000);    
}