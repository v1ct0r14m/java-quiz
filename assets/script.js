const startBtn = document.getElementById('start-button')

const questionContainer = document.getElementById('question-container')

const shuffleQuestions, currentQuestionIndex

.startBtn.addEventListener('click', startQuiz)

function startQuiz () {
    console.log('started')
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
    setNextQuestion()
}

function nextQuestion () {

}

function selectAnswer() {

}

const questions = {
    {
        question: ''
        answers: [
            {text:'', correct: true},
            {text:'', correct: false}
        ]
    }
}