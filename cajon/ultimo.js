"use strict";

const _question = document.getElementById("question");
const _options = document.querySelector(".quiz-options");


async function loadQuestion(){
  
    const resul =  await fetch ("./data.json");
    const data = await resul.json();
    showQuestion(data[0].question);
}


function showQuestion(data){
    let correctAnswer = data.correct_answer;
    console.log(data);
}

loadQuestion();