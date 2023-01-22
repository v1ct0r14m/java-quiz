//setting constants for buttons, questions, scorecard and leaderboard
const startPage = document.getElementsByClassName('start-page hide')
const startBtn = document.getElementById('start-button')
const nextBtn = document.getElementById('next-button')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerBtn = document.getElementById('answer-btn')
const scoreCard = document.getElementById('scores')
const leaderboard = document.getElementById('leaderboard')
var timer = document.getElementById('timer')
var shuffleQuestions, currentQuestion

//adding click events to start and next

timer.innerText = 00

startBtn.addEventListener('click', startQuiz)

nextBtn.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

function startQuiz () {
    startPage.classList.add('hide')
    startBtn.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove('hide')

    nextQuestion()
}


//timer
var setTime = function () {
    timerCount = 30
}

const checkTime = setInterval(function () {
    timer.innerText = timerCount
    timerCount--
}) 

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
        answerBtn.appendChild(button)
    })
}

//resets button and body colors to neutral
function resetQuiz() {
    clear(document.body)
    nextBtn.classList.add('hide')
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

// selects answers for quiz



// answer options to select, function will indicate whether answer is correct or incorrect
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

//question for quiz! proto
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

