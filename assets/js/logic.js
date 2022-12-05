var timeEl = document.querySelector("#time");
var startScreenEl = document.querySelector("#start-screen");
var startButtonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var endScreenEl = document.querySelector("#end-screen");
var submitButtonEl = document.querySelector("#submit");
var finalScoreSpanEl = document.querySelector("#final-score");

var score = 0;
var secondsLeft = 0;
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
var questionsArray = [
    new Question("first question"
        , "fist choice", false
        , "second choice", false
        , "third choice", true
        , "forth choice", false
    ),

    new Question("second question"
        , "second fist choice", true
        , "second second choice", false
        , "second third choice", false
        , "second forth choice", false
    )];

startButtonEl.addEventListener("click", startGame);
submitButtonEl.addEventListener("click", submitScore);

function submitScore() {

}

function setTime() {
    secondsLeft = 70;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0 || secondsLeft < 0 || selectedQuestion > questionsArray.length) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to Show score;
            finalScoreSpanEl.textContent = score;
            questionsEl.setAttribute("class", "hide");
            endScreenEl.setAttribute("class", "start");
        }
    }, 1000);
}

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


function nextQuestion(event) {    
    //if right answer add to score otherwise subtract 10 sec from timer   
    var message = document.createElement("p")
    if ( event.currentTarget.getAttribute("data-correctAnswer") === 'true') {
        score += 5;
        message.textContent = "Right answer";
    }else{
        message.textContent = "Wrong answer";
        secondsLeft -= 10;
    };
    event.currentTarget.parentElement.appendChild(message);
    //wait 1 second then get next question
    setTimeout(getQuestion, 1000);
}

function getQuestion() {
    //clear old choices
    choicesEl.innerHTML = '';    
    if (questionsArray[selectedQuestion]) {
        //get question and add to the Title
        questionTitleEl.textContent = questionsArray[selectedQuestion].question;
        //get all possible answer/choices for this question
        for (i = 0; i < questionsArray[selectedQuestion].choice.length; i++) {
            var choices = document.createElement("button");
            choices.textContent = questionsArray[selectedQuestion].choice[i][0];
            // store in the html if is right/wrong answer as dataset.
            choices.setAttribute("data-correctAnswer", questionsArray[selectedQuestion].choice[i][1]);
            choicesEl.appendChild(choices);
            choices.addEventListener("click", nextQuestion);
        }
    }
    selectedQuestion++;
}



