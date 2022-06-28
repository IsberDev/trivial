"use srict";






  // const deljson = await fetch("./quiz.json");
  //const dat = await deljson.json();
// las dos declaraciones de variable de arriba me dan error en la consola, no entoendo por qué



//variables movimiento
const i = 0;
let correctCount = 0;

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

generate();
   function generate (index){
     document.getElementById("question").innerHTML = dat[index].question;
     document.getElementById("optt1").innerHTML = dat[index].answers[0];
     document.getElementById("optt2").innerHTML = dat[index].answers[1];
     document.getElementById("optt3").innerHTML = dat[index].answers[2];
     document.getElementById("optt3").innerHTML = dat[index].answers[3];
   }

   function checkAnswer() {
    for (let info of datos)
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
    //contador preguntas
    i++;
    if(jsonData.length -1 < i){
      document.write("******Tu puntucación es:",  +correctCount+ "******");
   }
   generate(i);
  }



  

   //FUNCION CONTADOR

    /*function boton() {
     const botonJuega = start.querySelector("button1");
      botonJuega.addEventListener("click", () => {
      onclick()=>{generator(0)};}

   //const Player = {
    //name: localStorageTasks ? JSON.parse(localStorageTasks) : [],
    //arraynunber: [],
    //acierto:
    //fallo:
  //};


   //distribución paneles

*/

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
