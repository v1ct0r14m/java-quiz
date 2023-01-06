const startBtn = document.getElementById('start-button')

const questionContainer = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerBtnElement = document.getElementById('answer-btn')

const shuffleQuestions, currentQuestionIndex

startBtn.addEventListener('click', startQuiz)

function startQuiz () {
    console.log('started')
    startBtn.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}

function nextQuestion () {
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question)

function selectAnswer() {

}

const questions = {
    {
        question: 'where is the correct place to insert a JavaScript?',
        answers: [
            {text: 'in the <body> and <head> section', correct: true},
            {text: 'in the <head> section only', correct: false},
            {text: 'in the <body> section only', correct: false},
            {text: 'in the stylesheet', correct: false}
        ]
    }
}