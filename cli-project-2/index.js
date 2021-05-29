var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  question: "How many times was Ross legally divorced?",
  answer: "3"
}, {
  question: "How many sisters did Joey Tribbiani have?",
  answer: "7"
},
{
  question: "Before they were friends, who did Phoebe mug as a kid?",
  answer: "Ross"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " let's see if you are a true FRIENDS fan!");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
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
  console.log("Your Score is : ", score);

  
}


welcome();
game();
showScores();