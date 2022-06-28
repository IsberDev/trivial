"use strict";


const jsonData = [
  {
      "question": "What breed of dog was Marley in the film \"Marley & Me\" (2008)?",
      "answers": [
          "Labrador Retriever",
          "Dalmatian",
          "Golden Retriever",
          "Shiba Inu"
      ],
      "correct": "Labrador Retriever"
  },
  {
      "question": "Which of the following is not the name of a \"Bond Girl\"? ",
      "answers": [
          "Pam Bouvier",
          "Vanessa Kensington",
          "Wai Lin",
          "Mary Goodnight"
      ],
      "correct": "Vanessa Kensington"
  },
  {
      "question": "Which movie released in 2016 features Superman and Batman fighting?",
      "answers": [
          "Batman v Superman: Black of Knight",
          "Batman v Superman: Knightfall",
          "Batman v Superman: Superapocalypse",
          "Batman v Superman: Dawn of Justice"
      ],
      "correct": "Batman v Superman: Dawn of Justice"
  },
  {
      "question": "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
      "answers": [
          "Ted",
          "Spy Kids",
          "Harry Potter",
          "Pirates of the Caribbean "
      ],
      "correct": "Harry Potter"
  },
  {
      "question": "Who starred as Bruce Wayne and Batman in Tim Burton's 1989 movie \"Batman\"?",
      "answers": [
          "Michael Keaton",
          "Val Kilmer",
          "Adam West",
          "George Clooney"
      ],
      "correct": "Michael Keaton"
  },
]
   //jason array movement let
   
   let i = 0;
   let correctCount = 0;

 
   //generate(0); //iniciar primera pregunta

 console.log(jsonData[0].answers[3]);


 let pregunta = document.getElementById("question");



console.log(pregunta);

pregunta.innerHTML = jsonData.question;
 

 //generate(0);
/*   function generate (){
    document.getElementById("#question").innerHTML = jsonData[0].question;
    document.getElementById("#optt1").innerHTML = dat[0].answers[0];
    document.getElementById("#optt2").innerHTML = dat[0].answers[1];
    document.getElementById("#optt3").innerHTML = dat[0].answers[2];
    document.getElementById("#optt3").innerHTML = dat[0].answers[3];
   }
   generate();
   
   function checkAnswer(){
     addEventListener.

     if(document.getElementById("opt1").checked && jsonData[index].opt1 === jsonData[i].answer)
     {
       correctCount++;
     }
     if(document.getElementById("opt2").checked && jsonData[index].opt2 === jsonData[i].answer)
     {
        correctCount++;
     }
     if(document.getElementById("opt3").checked && jsonData[index].opt3 === jsonData[i].answer)
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
   
  // if(document.getElementById().checked && jsonData[index].opt1 !== jsonData[i].answer){
       
  // } if(document.getElementById().checked && jsonData[index].opt2 !== jsonData[i].answer){
     
  // }  if(document.getElementById().checked && jsonData[index].opt3 !== jsonData[i].answer){
 // }  if(document.getElementById().checked && jsonData[index].opt4 !== jsonData[i].answer){
  // }

//let score = 0;

//for (let i=0;i<question.length; i++){
//  let response = window.prompt(question[i].prompt);
//if (response === question[i].answer){
//  score++;
//  alert("correcto");
//}else{
//  alert("wrong");
//}
//} 
//alert("tienes" +score+ "/" + question.length)*/