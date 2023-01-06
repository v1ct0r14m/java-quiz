const startBtn = document.getElementById('start-button')

const nextBtn = document.getElementById('next-button')

const questionContainer = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerBtnElement = document.getElementById('answer-btn')

let shuffleQuestions, currentQuestionIndex

startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz () {
    startBtn.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion () {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}

function selectAnswer() {
    const

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

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