//setting constants for buttons and questions

const startBtn = document.getElementById('start-button')

const nextBtn = document.getElementById('next-button')

const questionContainer = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerBtnElement = document.getElementById('answer-btn')

let shuffleQuestions, currentQuestionIndex

//adding click events to start and next

startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

//starting quiz function, enables shuffle of questions so it is different each time

function startQuiz () {
    startBtn.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    nextQuestion()
}

//puts buttons and body back into neutral, shows next question

function nextQuestion () {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
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

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}

// answer options to select, setStatus function will indicate whether answer is correct or incorrect

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'restart'
        startBtn.classList.remove('hide')
    }
}

//changes colors of answer boxes to indicate whether selected answer is correct or not, and display correct answer nonetheless

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

//removes colored answers to reset the board for next question

function clearStatusClass(element) {
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
        ]
    }
]