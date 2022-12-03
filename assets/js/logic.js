var timeEl = document.querySelector("#time");
var startScreenEl = document.querySelector("#start-screen");
var startButtonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var endScreenEl = document.querySelector("#end-screen");

startButtonEl.addEventListener("click", startGame);

function startGame() {
    // set timer
    setTime();
    // hide startScreen
    startScreenEl.setAttribute("class", "hide");
    // show question area
    questionsEl.setAttribute("class", "start");
    //create questions
    questionTitleEl.textContent = "question test"

    var choice1 = document.createElement("button");
    var choice2 = document.createElement("button");

    choice1.textContent = "choice 1";
    choice2.textContent = "choice 2";

    choicesEl.appendChild(choice1);
    choicesEl.appendChild(choice2);
}

function setTime() {
    secondsLeft = 70;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to Show score;
        }

    }, 1000);
}