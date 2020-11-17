
const startQuiz = document.querySelector(".start-quiz");
const startQuizQuestions = document.querySelector(".start-quiz-questions");
const startButton = document.querySelector(".start-button");



const questionNumber = document.querySelector(".questionNumber");
var questionElement = document.getElementById("questions");
var resultConteiner = document.getElementById("result");
var restartButton = document.getElementById("restart")

startButton.addEventListener("click", hideStartQuestion);

function hideStartQuestion(){
    startQuiz.style.display = "none"
    startQuizQuestions.style.display="block"
}

var currentQuestions = 0;
var score = 0;
var caunter=1;
var total = questionsArray.length;


var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var nextButton = document.getElementById("nextbtn");



function loadQuestions(questionIndex){
    var q = questionsArray[questionIndex];
    questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;

    setQuestion();

}
function loadNextQuestion (){
    var selected = document.querySelector('input[type=radio]:checked');
    if(!selected){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Answer is not selected!',
            footer: 'Please select answer',
          })
        return;
    }

    var answer =  selected.value;

    if(questionsArray[currentQuestions].correctAnswer == answer)
    score += 1;

    selected.checked = false;

    currentQuestions++;

    if(currentQuestions == total - 1){
        nextButton.innerHTML = 'finish';
    }
    if(currentQuestions == total){
        startQuizQuestions.style.display = "none"
        resultConteiner.style.display = "block"
        resultConteiner.innerHTML = 'Your Scrore: ' + score;
        restartButton.style.display = "block"
        return;
    }
    
    loadQuestions(currentQuestions);
    
}


    loadQuestions(currentQuestions);


        
function setQuestion(){
    questionNumber.innerHTML = "Questions "+ (caunter ++ ) + " of " + total;
};




function restartQuiz(){    

    restartQuizStart();
    location.reload();


    
}


function restartQuizStart(){
    resultConteiner.style.display = "none"
    restartButton.style.display = "none"
    startQuiz.style.display = "block"
}

 


