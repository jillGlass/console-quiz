function Question(question, answers, correctA) {
  this.question = question;
  this.answers = answers;
  this.correctA = correctA;
}

Question.prototype.askQuestion = function() {
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ":" + this.answers[i]);
  }
};

Question.prototype.checkAnswer = function(answer) {
  if (answer == this.correctA) {
    console.log("You were right!");
  } else console.log("You were wrong!");
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

var qToLog = Math.floor(Math.random() * questions.length);

questions[qToLog].askQuestion();

var answer = parseInt(prompt("Please enter your answer"));

questions[qToLog].checkAnswer(answer);
