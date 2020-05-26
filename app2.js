function Question(question, answers, correctA, score) {
  this.question = question;
  this.answers = answers;
  this.correctA = correctA;
  this.score = score;
}

Question.prototype.askQuestion = function() {
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ":" + this.answers[i]);
  }
};

Question.prototype.checkAnswer = function(answer, callback) {
  var sc;
  if (answer == this.correctA) {
    console.log("You were right!");
    sc = callback(true);
  } else {console.log("You were wrong!");
  sc = callback(false);
  }
  this.displayScore(sc)
};

Question.prototype.displayScore = function(score) {
  console.log("Your current score is: " + score);
  console.log("------------------------------");
};

var Question1 = new Question(
  "What is the capital of NZ?",
  ["Wellington", "Auckland", "Paris"],
  0
);
var Question2 = new Question(
  "What is the capital of Australia?",
  ["Wellington", "Canberra", "Paris"],
  1
);
var Question3 = new Question(
  "What is the capital of UK?",
  ["London", "Auckland", "Paris"],
  0
);

var questions = [Question1, Question2, Question3];

function score() {
  var sc = 0;
  return function(correct) {
    if (correct) {
      sc++;
    }
    return sc;
  };
}
var keepScore = score();

function nextQuestion() {
  var qToLog = Math.floor(Math.random() * questions.length);

  questions[qToLog].askQuestion();

  var answer = prompt("Please enter your answer");

  if (answer !== "exit") {
    questions[qToLog].checkAnswer(parseInt(answer), keepScore);

    nextQuestion();
  }
}
score();
nextQuestion();
