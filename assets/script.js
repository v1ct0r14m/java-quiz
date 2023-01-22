//setting constants for buttons, questions, scorecard and leaderboard
const startPage = document.getElementsByClassName('start-page hide')
const startBtn = document.getElementById('start-button')
const nextBtn = document.getElementById('next-button')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerBtnElement = document.getElementById('answer-btn')
const scoreCard = document.getElementById('scores')
const leaderboard = document.getElementById('leaderboard')
var timer = document.getElementById('timer')
var shuffleQuestions, currentQuestion

//adding click events to start and next

startBtn.addEventListener('click', startQuiz)

nextBtn.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

function startQuiz () {
    startBtn.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    //time.textContent = 0

    nextQuestion()
}

// function timer() {
//     var sec = 60;
//     function startTimer(){
//         console.log('timer suppose to go')
//         var timer = setInterval(function(){
//             sec--;
//             document.getElementById('timer').time='00:'+sec;
//             if (sec < 0) {
//                 clearInterval(timer);
//                 alert("Time is up!")
//             }
//         }, 1000);
//     }
//     document.getElementById('incorect').addEventListener('click', function() {
//         sec -= 5;
//         document.getElementById('timerDisplay').time='00:'+sec;
//     });
//     startTimer();
//};

//puts buttons and body back into neutral, shows next question

function nextQuestion () {
    resetState()
    showQuestion(shuffleQuestions[currentQuestion])
}

//shows current question

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnElement.appendChild(button)
    })
}




//resets button and body colors to neutral

function resetQuiz() {
    clear(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}

// answer options to select, setStatus function will indicate whether answer is correct or incorrect

// function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerBtnElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (shuffleQuestions.length > currentQuestion + 1) {
//         nextBtn.classList.remove('hide')
//     } else {
//         startBtn.innerText = 'restart'
//         startBtn.classList.remove('hide')
//     }
// }

//changes colors of answer boxes to indicate whether selected answer is correct or not, and display correct answer nonetheless

function resetQuiz(element, correct) {
    clear(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

//removes colored answers to reset the board for next question

function clear(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//question for quiz!

const questions = [
    {
        question: 'where is the correct place to insert a JavaScript?',
        answers: [
            {text: 'in the <body> and <head> section', correct: true},
            {text: 'in the <head> section only', correct: false},
            {text: 'in the <body> section only', correct: false},
            {text: 'in the stylesheet', correct: false}
        ],
    },
    {    question: 'arrays in JavaScript can be used to store...',
        answers: [
            {text: 'booleans', correct: false},
            {text: 'numbers', correct: false},
            {text: 'strings', correct: false},
            {text: 'all of the above', correct: true},
        ],
    },
    {
        question: 'string values must be enclosed within ________ when being assigned to variables',
        answers: [
            {text: 'commas', correct: false},
            {text: 'quotes', correct: true},
            {text: 'curly brackets', correct: false},
            {text: 'parentheses', correct: false},
        ],
    },
    {
        question: 'what syntax is used to call a function?',
        answers: [
            {text: 'come here function', correct: false},
            {text: 'var function', correct: false},
            {text: 'function()', correct: true},
            {text: 'function', correct: false},
        ],
    }
]

