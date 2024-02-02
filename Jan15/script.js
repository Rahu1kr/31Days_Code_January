const quizQuestions = [
    {
        question: "Which language runs in a web browser?",
        opt1: "Java",
        opt2: "C",
        opt3: "Python",
        opt4: "JavaScript",
        correct: "opt4",
    },
    {
        question: "What does CSS stand for?",
        opt1: "Central Style Sheets",
        opt2: "Cascading Style Sheets",
        opt3: "Cascading Simple Sheets",
        opt4: "Cars SUVs Sailboats",
        correct: "opt2",
    },
    {
        question: "What does HTML stand for?",
        opt1: "Hypertext Markup Language",
        opt2: "Hypertext Markdown Language",
        opt3: "Hyperloop Machine Language",
        opt4: "Helicopters Terminals Motoboats Lamborginis",
        correct: "opt1",
    },
    {
        question: "What year was JavaScript launched?",
        opt1: "1996",
        opt2: "1995",
        opt3: "1994",
        opt4: "none of the above",
        correct: "opt2",
    },
];

let question_number_element = document.getElementById("question-number");
let question_txt_element = document.getElementById("question-txt");
let option_1_element = document.getElementById("option1");
let option_2_element = document.getElementById("option2");
let option_3_element = document.getElementById("option3");
let option_4_element = document.getElementById("option4");
let next_button = document.getElementById("next-button");
let current_question_number = 0;
let score = 0;

// A function to show question and option on html page.

function showQuestion(){
    // uncheck all the option selected
    document.querySelectorAll("input[name = opt]").forEach(option=>option.checked=false);

    // Set questions and options from array
    question_number_element.innerHTML = (current_question_number+1) + ". ";
    question_txt_element.innerHTML = quizQuestions[current_question_number].question;
    option_1_element.innerHTML = quizQuestions[current_question_number].opt1;
    option_2_element.innerHTML = quizQuestions[current_question_number].opt2;
    option_3_element.innerHTML = quizQuestions[current_question_number].opt3;
    option_4_element.innerHTML = quizQuestions[current_question_number].opt4;
}

// Handling Event listner on button click

next_button.addEventListener('click', ()=>{
    let optionIdSelected = document.querySelector('input[name = opt]:checked');
    if(optionIdSelected==null)
    {
        alert("Please select one option");
    }else{
        let option_correct = quizQuestions[current_question_number].correct;
        if(optionIdSelected.id==option_correct){
            score++;
        }
        current_question_number++;
        if(current_question_number>=quizQuestions.length){
            // show final answer
            current_question_number = 0;
            localStorage.setItem("score", score);
            location.href = "./resultPage.html";
        }else{
            // show next question
            showQuestion();
        }
    }
});
showQuestion();








