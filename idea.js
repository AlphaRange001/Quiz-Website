const questions =[
    {
        question:"What does HTML stand for?",
        answers:[
            {text:"HyperText Markup Language",correct:true},
            {text:"HyperText Machine Language",correct:false},
            {text:"HyperTechnical Markup Language",correct:false},
            {text:"HyperText Markdown Language",correct:false},
        ]
    },
    {
        question:"What does CSS stand for?",
        answers:[
            {text:"Computer Style Sheets",correct:false},
            {text:"Cascading Style Sheets",correct:true},
            {text:"Creative Style Sheets",correct:false},
            {text:"Colorful Style Sheets",correct:false},
        ]
    },
    {
        question:"Which of the following is a version control system?",
        answers:[
            {text:"Git",correct:true},
            {text:"Docker",correct:false},
            {text:"Kubernetes",correct:false},
            {text:"Jenkins",correct:false},
        ]
    },
    {
        question:"Which programming language is used primarily for web development?",
        answers:[
            {text:"Javascript",correct:true},
            {text:"Java",correct:false},
            {text:"Python",correct:false},
            {text:"C",correct:false},
        ]
    },
    {
        question:"Which SQL command is used to retrieve data from a database?",
        answers:[
            {text:"INSERT",correct:false},
            {text:"UPDATE",correct:false},
            {text:"DELETE",correct:false},
            {text:"SELECT",correct:true},
        ]
    }
]

const questionElement=document.getElementById("Question")
const answerbutton=document.getElementById("answerbutton")
const nextbutton=document.getElementById("nextbutton")

let currentquestionIndex=0
let score=0

function startquiz(){
    currentquestionIndex=0
    score=0
    nextbutton.innerHTML="NEXT"
    showQuestion()
}
function showQuestion(){
    let currentQuestion=questions[currentquestionIndex]
    let questionNo=currentquestionIndex+1
    questionElement.innerHTML=questionNo+"."+currentQuestion.question


    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("")
    })
}
