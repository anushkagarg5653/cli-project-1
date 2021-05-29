var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  question: "Where do I live? ",
  answer: "Bhopal"
}, {
  question: "What is my collge name ? ",
  answer: "SRM"
},
{
  question: "My fav color ",
  answer: "Black"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Anushka?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Your Score is: ", score);
}


welcome();
game();
showScores();