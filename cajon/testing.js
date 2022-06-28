"use strict";


const btnNext= document.getElementById("button1");

const i = 0;
let correctCount = 0;

let answer=``;

btnNext.addEventListener('click', function(){
 document.getElementById("answer").innerHTML =  "<button id=`btnDisplayAnswer`>DISPLAY ANSWER</button>"; 
fetch("data.json")
.then(
    function(response) {
        if (response.status !== 200) {
            console.log("Looks like there iss a problem. Status Code;" +
            response.status);
            return;
        }
        response.json().then(function(data){
           // console.log(data);
       const answer = data[0].correct;
       const question = data[0].question;
    //  const category = data[0].answers;
      console.log(category);
       //correctCount++
      console.log(question + ":" + answer);
      document.getElementById("question").innerHTML = question;
    //  document.getElementById("answer").innerHTML = answer;
      document.getElementById("category").innerHTML = category;
      //document.getElementById("answer").innerHTML = answer;
      document.getElementById("answer").style.display = "block";
      document.getElementById("btnDisplayAnswer").addEventListener(`click`, function(){
     this.document.getElementById("answer").innerHTML = answer;
      })      
    });
    }
    )
.catch(function(err){
    console.log(`Fetch Error : _S`, err);
});
});



/*
const input = document.querySelector("input");
const button = document.querySelector("button");
const containerInfo = document.querySelector(".container");


function traerDatos (){
  fetch("./data.json");
  .then((res)=> res.json());
  .then((data) => console.log(data));
  dbt(data);
}

traerDatos();

function dbt(movies){
  const h3 = document.createElement("h3");
  const div = document.createElement("div");
  div.appendChild(h3);
}


//función async awair para sacar los datos del json const data




//const i = 0;
//let correctCount = 0;

async function cinemaQuiz (){ 
  const errorArea = document.querySelector("p.error");
 try {
  const response = await fetch ("./data.json");
  if(response.ok){
   const dat = await response.json();
   console.log (dat[0]);
  }
  } catch (error) {
   console.error("Error:", error.message);
    errorArea.textContent = error.message;
  }
}
 //cinemaQuiz();

 function generate (index){
  for (let i = 0; i < index; i++){
    //const element = array[index];
  document.getElementById("question").innerHTML = dat[index].question;
  document.getElementById("optt1").innerHTML = dat[index].answers[0];
  document.getElementById("optt2").innerHTML = dat[index].answers[1];
  document.getElementById("optt3").innerHTML = dat[index].answers[2];
  document.getElementById("optt4").innerHTML = dat[index].answers[3];
  correctCount++
}}


 //async function getJ (urlApi){
 //  let response = await fetch (urlApi)
 //  let datos = await response.json();
 //  console.log("hello");
 //  return datos.result;
 //}

 //async function main(){
 //const dat = await getJ("./data.json", 0);
 //console.log(dat);
 //}

 //main();


//generate();

/*
  function generate (index){
    for (let i = 0; i < index; i++){
      //const element = array[index];
    document.getElementById("question").innerHTML = dat[index].question;
    document.getElementById("optt1").innerHTML = dat[index].answers[0];
    document.getElementById("optt2").innerHTML = dat[index].answers[1];
    document.getElementById("optt3").innerHTML = dat[index].answers[2];
    document.getElementById("optt4").innerHTML = dat[index].answers[3];
    correctCount++
  }}


const form = document.getElementById("button1");


form.addEventListener("submit", (e) => {
  // Prevenimos que se envie el formulario al pulsar el botón.
  e.preventDefault();
  const player = document.getElementById("button1");
  // Creamos una nueva entrada para localstore con la variable player user con el texto del input.
  addPlayer(player.value);
  // Vaciamos el input.
  player.value = "";
});

 cinemaQuiz();

 //form.elements.User;

 function checkAnswer(cinemaQuiz) {
   
  if(document.getElementById("#optt1").checked && dat[0].answers[0] === jsonData[i].answer[0])
  {
    correctCount++;
  }
  if(document.getElementById("#optt2").checked && dat[0].answers[1] === jsonData[i].answer[1])
  {

     correctCount++;
  }
  if(document.getElementById("#optt3").checked && dat[0].answers[2] === jsonData[i].answer[2])
  {
     correctCount++;
  }
  if(document.getElementById("#optt4").checked && dat[0].answers[3] === jsonData[i].answer[3])
  {
  correctCount++
  } 
    // if(document.getElementById().checked && jsonData[index].opt1 !== jsonData[i].answer){
       
  // } if(document.getElementById().checked && jsonData[index].opt2 !== jsonData[i].answer){
     
  // }  if(document.getElementById().checked && jsonData[index].opt3 !== jsonData[i].answer){
 // }  if(document.getElementById().checked && jsonData[index].opt4 !== jsonData[i].answer){
  // }


  //contador preguntas
  i++;
  if(jsonData.length -1 < i){
    document.write("******Tu puntucación es:",  +correctCount+ "******");
  }
  generate (i);
}     // function boton() {
  // const botonJuega = start.querySelector("button1");
  // botonJuega.addEventListener("click", () => {
   //  onclick()=>{generator(0)};}

   //distribución paneles




const start = document.querySelector(".start");
const center = document.querySelector(".center");
const end = document.querySelector(".end");

function showPanel(panel) {
  panel.classList.remove("hidden");
}

function hideAllPanel() {
  start.classList.add("hidden");
  center.classList.add("hidden");
  end.classList.add("hidden");
}

function showEnd() {
  showPanel(end);
  const text = end.querySelector("p");
  text.textContent = "Este es el panel final";
  const endButton = end.querySelector("button");
  endButton.addEventListener("click", () => {
    hideAllPanel();
    main();
  });
}

function showCenter() {
  showPanel(center);
  const text = center.querySelector("p");
  text.textContent = "Este es el panel principal";
  const centerButton = center.querySelector("button");
  centerButton.addEventListener("click", () => {
    hideAllPanel();
    showEnd();
  });
}

function main() {
  showPanel(start);
  const startButton = start.querySelector("button");

  startButton.addEventListener("click", () => {
    hideAllPanel();
    showCenter();
  });
}
main();

*/