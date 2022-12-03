var timeEl = document.querySelector("#time");
var startScreenEl = document.querySelector("#start-screen");
var startButtonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var endScreenEl = document.querySelector("#end-screen");

var selectedQuestion = 0;
//constructor for questions which "q" is the question "aX" is the answer and "vX" is true of false considering the right answer
class Question {
    constructor(q, a1, v1, a2, v2, a3, v3, a4, v4) {
        this.question = q,
            this.choice = [
                [a1, v1],
                [a2, v2],
                [a3, v3],
                [a4, v4]
            ];
    }
}
// Create first question and choices options
const question1 = new Question("first question"
    ,"fist choice", false
    ,"second choice", false
    ,"third choice", true
    ,"forth choice", false
);

const question2 = new Question("second question"
    ,"second fist choice", true
    ,"second second choice", false
    ,"second third choice", false
    ,"second forth choice", false
);

startButtonEl.addEventListener("click", startGame);

function startGame() {
    // set timer
    setTime();
    // hide startScreen
    startScreenEl.setAttribute("class", "hide");
    // show question area
    questionsEl.setAttribute("class", "start");
    //create questions
    getQuestion();
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

function getQuestion() {
    questionTitleEl.textContent = question1.question;
    for(i = 0; i < question1.choice.length; i++){ 
        var choices = document.createElement("button");
        choices.textContent = question1.choice[i][0];
        choices.setAttribute("data-correctAnswer", question1.choice[i][1]);
        choicesEl.appendChild(choices);
    }
}