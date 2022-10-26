
let quizArr = [
    {
        question: "Hur många länder finns det i världen?",
        a: "195 stycken",
        b: "133 stycken",
        correct: "a",
    },
    {
        question: "Vilken är världens högsta berg",
        a: "K2",
        b: "Mount Everest",
        correct: "b",
    },
    {
        question: "Hur många personer bor det i Stockholm",
        a: "1 345 542 stycken",
        b: "975 551 stycken",
        correct: "b",
    },
    {
        question: "Vilken är Sveriges fjärde största stad",
        a: "Uppsala",
        b: "Norrköping",
        correct: "a",
    },
    {
        question: "Vilket land kommer Elon musk ifrån?",
        a: "Sydafrika",
        b: "USA",
        correct: "a",
    },
    {
        question: "Vilket land kommer kaffet ursprungligen ifrån",
        a: "Colombia",
        b: "Etiopien",
        correct: "b",
    },
    {
        question: "Vilken är Sveriges största sjö",
        a: "Vättern",
        b: "Vänern",
        correct: "b",
    },
    {
        question: "Vilket är nordens rikaste land",
        a: "Norge",
        b: "Sverige",
        correct: "a",
    },
    {
        question: "Hur många delstater finns det i USA",
        a: "50",
        b: "52",
        correct: "a",
    },
    {
        question: "Vart spelas sommar OS 2024",
        a: "Peking",
        b: "Paris",
        correct: "b",
    },
]

document.body.style.background = "white";
let quiz = document.getElementById('quiz')
let answerElement = document.querySelectorAll('.answer')
let questionElement = document.getElementById('question')
let aText = document.getElementById('aText')
let bText = document.getElementById('bText')
let submitBtn = document.getElementById('submit')
let showResult =document.querySelector("#result")



darkMode.addEventListener("click", () => {
    if (document.body.style.background === "white" ) {
        document.body.style.background = "black";
        document.body.style.color = "lightgrey";
        darkMode.innerText = "Light mode";
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
        darkMode.innerText = "Dark mode";
    }
});

let currentQuiz = 0
let score = 0

startQuiz()  

function startQuiz(){

    undoSelectAnswer()

    let currentQuizArr = quizArr[currentQuiz]

    questionElement.innerText = currentQuizArr.question
    aText.innerText = currentQuizArr.a
    bText.innerText = currentQuizArr.b
   
}

function undoSelectAnswer() {
    answerElement.forEach(answerElement => answerElement.checked = false)
}

function Select() {
    let answer
    answerElement.forEach(answerElement => {
        if(answerElement.checked){
            answer = answerElement.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    let answer = Select()
    if(answer) {
        if (answer === quizArr[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizArr.length){
            startQuiz()
        } else {
            if (score > 7) {
                showResult.style.color = "green";
                showResult.innerText = `Du fick ${score} / 10 vilket är mycket väl godkänt, bra jobbat!`;
              } else if (score >= 5) {
                showResult.style.color = "yellow";
    
                  showResult.innerText = `Du fick ${score} / 10 vilket är godkänt`;
              } else if (score < 5) {
                showResult.style.color = "red";
    
                  showResult.innerText = `Du fick tyvärr ${score} / 10 vilket är underkänt` ;

                
        }
            
        }
    
    }
})
