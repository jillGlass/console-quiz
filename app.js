function Question (question, answers, correctA) {
    this.question = question;
    this.answers = answers;
    this.correctA = correctA;
}

var Question1 = new Question('What is the capital of NZ?', {0: 'Wellington', 1: 'Auckland', 2: 'Paris'}, 0)
var Question2 = new Question('What is the capital of Australia?', ['0. Wellington', '1. Canberra', '2. Paris'], 1)
var Question3 = new Question('What is the capital of UK?', ['0. London', '1. Auckland', '2. Paris'], 0)

var questions = [Question1, Question2, Question3];


// console.log(Question1.answers[0])

var qToLog = questions[Math.floor(Math.random() * questions.length)];
Question.prototype.askQuestion = function() {
    //select random question from array and console.log
    

    return console.log(qToLog.question),console.log(qToLog.answers)
    //console.log answers to that question

}

Question.prototype.checkAnswer = function() {
    var answering = prompt("Please enter your answer", "");
    if(answering == qToLog.correctA){
        console.log('You were right!')
    } else console.log('You were wrong!')
   
}


Question1.askQuestion()

Question1.checkAnswer()
