"use strict";

const btn = document.querySelector("#btn");
const main = document.querySelector(`.container`);
const message = pageEles(main, "div", `Press start button`, `message`);
const output = pageEles(main, "div", "" ,"game");
const url =`./data.json`;

//const resjson = await fetch("./quiz.json");
//const data = await resjson.json();
btn.onclick = loadData;

btn.onclick = () => {
main.textContent = "Clicked";
}


function pageEles(parent, t, html, c){
  const ele = document.createElement(t);
  ele.innerHTML = html;
  ele.classList.add(c);
  return parent.appendChild(ele);
  }


function loadData(){
    btn.style.display = "none";
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
    createQuestion(data);
})
}

function createQuestion(data){
    const el = pageEles(output, "div", "", "question");
    console.log(data);
    
if(datalength===0){
    message.textContent("game over");
}else{
    const question = data.shift();
    message.textContent="Question ";
    outputQuestion (question, el);
}
}

//function outputQuestion (question, parent){
//console.log(question);
//const que = pegeEles(parent, "div", question.question,"question");
//}







/*class Question{
    constructor(textooo, choices, answer ){
        this.textooo = textooo;

        this.choices = choices;
     
        this.answer = answer;
    } 
    correctAnswer(){
return true
    }
}

new Question()

const question1 = new Question();
const question2 = new Question();
const question3 = new Question();
const question4 = new Question();

console.log(question1);
console.log(question1.correctAnswer());*/



////experimentos
/*
async function cinemaQuiz (){ 
    const errorArea = document.querySelector("p.error");
    try {
    const response = await fetch ("./data.json");
    if(response.ok){
     const dat = await response.json();
     console.log (dat[0].question);
     console.log(dat[0].answer);
     generate(0);
     function generate (index){
       document.getElementById("question").innerHTML = dat[index].q;
       document.getElementById("optt1").innerHTML = dat[index].opt1;
       document.getElementById("optt2").innerHTML = dat[index].opt2;
       document.getElementById("optt3").innerHTML = dat[index].opt3;
       cinemaQuiz(); 
       function checkAnswer(){
        addEventListener.
    
        if(document.getElementById("opt1").checked && dat[index].opt1 === jsonData[i].answer)
        {
          correctCount++;
        }
        if(document.getElementById("opt2").checked && dat[index].opt2 === jsonData[i].answer)
        {
           correctCount++;
        }
        if(document.getElementById("opt3").checked && dat[index].opt3 === jsonData[i].answer)
        {
        correctCount++
        } 
        //contador preguntas
        i++;
        if(jsonData.length -1 < i){
          document.write("******Tu puntucación es:",  +correctCount+ "******");
        }
        //callback
        generate(i);
    
    }
    }
    
    
    // catch (error) {
     // console.error("Error:", error.message);
      //errorArea.textContent = error.message;
    //}
  //}
  // cinemaQuiz();



   //generate(0);
   //function generate (index){
    // document.getElementById("question").innerHTML = dat[index].q;
    // document.getElementById("optt1").innerHTML = dat[index].opt1;
    // document.getElementById("optt2").innerHTML = dat[index].opt2;
    // document.getElementById("optt3").innerHTML = dat[index].opt3;
   //}

   /*
   function checkAnswer(){
    addEventListener.

    if(document.getElementById("opt1").checked && dat[index].opt1 === jsonData[i].answer)
    {
      correctCount++;
    }
    if(document.getElementById("opt2").checked && dat[index].opt2 === jsonData[i].answer)
    {
       correctCount++;
    }
    if(document.getElementById("opt3").checked && dat[index].opt3 === jsonData[i].answer)
    {
    correctCount++
    } 
    //contador preguntas
    i++;
    if(jsonData.length -1 < i){
      document.write("******Tu puntucación es:",  +correctCount+ "******");
    }
    //callback
    generate(i);
    */
