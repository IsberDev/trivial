"use strict";

let preguntas = [];
let correctCount = 0;
let preguntaNum = 0;

//const errorArea = document.querySelector("p.error");
const preguntaElement = document.querySelector(".pregresp");

async function getPreguntas() {
  try {
    const response = await fetch("./data.json");
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error:", error.message);
    return [];
    //errorArea.textContent = error.message;
  }
}

async function quiz() {
  preguntas = await getPreguntas();
  console.log(preguntas);
  renderQuestion(preguntas[preguntaNum]);
}

function renderQuestion(questionToRender) {
  preguntaElement.innerHTML = "";

  const h2Element = document.createElement("h2");
  h2Element.textContent = questionToRender.question;

  const headerElement = document.createElement("header");
  headerElement.append(h2Element);

  const ulElement = document.createElement("ul");
  for (const respuesta of questionToRender.answers) {
    const liElement = document.createElement("li");
    liElement.textContent = respuesta;
    ulElement.append(liElement);
  }
  preguntaElement.append(headerElement);
  preguntaElement.append(ulElement);

  ulElement.addEventListener("click", (event) => {
    const target = event.target;
    // if (target.matches("li")) {
    if (target.textContent === questionToRender.correct) {
      alert("Acertaste");
      correctCount++;
      console.log("acertaste", questionToRender.correct);
      //        console.log(correctCount);
    } else {
      alert("Fallaste!");
      console.log("ERROR", questionToRender.correct); //
    }
    console.log(correctCount);
    if (++preguntaNum < preguntas.length) {
      renderQuestion(preguntas[preguntaNum]);
    } else {
      // Pasar al panel final con los resultados
    }
    // }
  });
}

quiz();
