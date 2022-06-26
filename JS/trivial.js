"use strict";

// funcion para gestionar error el cual se gestina con un panel de errores de html y llamada del json
const resjson = await fetch("./quiz.json");
const data = await resjson.json();
async function mainjson() {
  const errorarea = document.querySelector("p.error");
  try {
    resjson;
    if (resjson.ok) {
      data;
      //console.log(data[0]);
    }
    //throw new Error("Mi error");
  } catch (error) {
    console.log(error.message);
    errorarea.textContent = error.message;
    showerror();
  }
}

mainjson();

//--------------------------------------------------------------------------------------------------llamada a json y pintar preguntas y respuestas
//decraraciones
let rightanswers = data.correct;
let counterp = 0;
let rightans = 0;
let wrongans = 0;
let time = 20;
let timeinterval;

const printhtmlpregunta = (i) => {
  counterp++;
  const q = data[i];
  let a = q.answers;
  a = a.sort((a, b) => Math.floor(Math.random() * 3) - 1);
  //mirar
  const htmlanswersarray = a.map(
    (currentA) =>
      `<p class=answer><button class=evaluar>X</button><span>${currentA}</span></p>`
  );

  // const htmlanswersarray = a.map(
  //    (currentA) => document.createElement(`<p class=ans><button id=evalu onclick="evaluateAnswer('${currentA}', this)">X</button> <span>${currentA}</span></p>)
  //     `
  //   //button.getElementById("evalu").addEventListener("click") =
  // )
  // const evaluateButton = center.respuestas.querySelectorall("button");
  // evaluateButton.addEventListener("click", () => {
  //   evaluateAnswers("${currentA}", this);
  // });
  const htmlanswers = htmlanswersarray.join(" ");

  //pintura en el HTML (ok)
  let Htmlpreguntacode = `<p>${q.question}</p>`;
  document.querySelector("div.pregunta").innerHTML = Htmlpreguntacode;
  let Htmlrespuestascode = `<p>${htmlanswers}</p>`;
  document.querySelector("div.respuestas").innerHTML = Htmlrespuestascode;
};
//tiempo para respuesta
time = 20;
let cretime = `<p class=time></p>`;
document.querySelector(".divtime").innerHTML = cretime;
document.querySelector(".time").innerHTML = time;
clearInterval(timeinterval);
timeinterval = setInterval(() => {
  time--;
  if (time == 0) {
    alert("Se acabo el tiempo");
    clearInterval(timeinterval);
  } else {
    document.querySelector(".time").innerHTML = time;
  }
}, 1000);
//evaluador de respuestas y comprobacion--------------------------

const evaluarans = (answers) => {
  const padrepre = document.querySelectorAll("p.answer");
  document
    .querySelectorAll(".answer")
    .forEach((a) => a.classList.remove("right", "wrong"));

  if ((answers = rightanswers)) {
    const text = end.querySelector(".aciertos");
    text.textContent = "Acertaste";
    padrepre.classList.add("right");
    rightans++;
    document.querySelector.add(".verdad").innerHTML = rightans;
  } else answers !== rightanswers;
  const text = end.querySelector(".aciertos");
  text.textContent = "Fallaste";

  padrepre.classList.add("wrong");
  wrongans++;
  document.querySelector.add(".mentira").innerHTML = wrongans;
};

printhtmlpregunta(counterp);

//------------------------------------------------------------------------

const form = document.forms.usuario;

form.addEventListener("submit", (e) => {
  // Prevenimos que se envie el formulario al pulsar el botón.
  e.preventDefault();
  const player = form.elements.User;
  // Creamos una nueva entrada para localstore con la variable player user con el texto del input.
  addPlayer(player.value);
  // Vaciamos el input.
  player.value = "";
});
//----------guardado de ususrio en local storage
const saveuser = () => {
  // Convertimos a una cadena de texto JSON el array de tareas.
  const userjson = JSON.stringify(usuario.user);
  const arrayjson = JSON.stringify(usuario.arraynunber);
  const acietojson = JSON.stringify(usuario.acietojson);
  const fallojson = JSON.stringify(usuario.fallojson);
  // Guardamos las tareas en el local storage.
  window.localStorage.setItem(
    "Player",
    userjson,
    arrayjson,
    acietojson,
    fallojson
  );
};

const addPlayer = (text) => {
  usuario.user.push({ text: text });
  usuario.arraynunber.push({ text: text });
  usuario.acierto.push({ text: text });
  usuario.fallo.push({ text: text });
  // Guardamos los cambios en el localStorage.
  saveuser();
};

const usuario = {
  user: [],
  arraynunber: [],
  acierto: [],
  fallo: [],
};

const deleteAlluser = () => {
  // Vaciamos el array de tareas.
  usuario.user = [];

  // Guardamos los cambios en el localStorage.
  saveuser();
};

//Obtenemos las tareas almacenadas en el Local Storage (si las hay).
// * Si en la constante anterior recibimos un valor, JavaScript se tomará
//  * eso como un true (la variable NO está vacía). En este caso nos quedamos
//  * con lo que haya en el localStorage.
//  *
//  * De lo contrario, si localStorageTasks está vacío,  será igual
//  * a un array vacío.
const localStorageuser = window.localStorage.getItem("Player");
const respartida = {
  user: localStorageuser ? JSON.parse(localStorageuser) : [],
};

//------------------------------------------------

//-----------------------------------------------------------Ventanas paneles

const start = document.querySelector(".start");
const center = document.querySelector(".center");
const end = document.querySelector(".end");
const error = document.querySelector(".error");
const evaluarb = center.querySelectorAll(".evaluar");

const botoneva = evaluarb[0].addEventListener("click", () => {});

for (const evaluar of evaluarb) {
  evaluar.addEventListener("click", () => {
    evaluarans();
    setTimeout(() => {
      hideAllPanel();
      showEnd();
    }, 3000);
  });
}

function showPanel(panel) {
  panel.classList.remove("hidden");
}

function hideAllPanel() {
  start.classList.add("hidden");
  center.classList.add("hidden");
  end.classList.add("hidden");
  error.classList.add("hidden");
}

function showEnd() {
  showPanel(end);
  const text = end.querySelector("p");
  text.textContent = "¿Acertaste o Fallastes?";

  const endButton = end.querySelector("button");
  endButton.addEventListener("click", () => {
    hideAllPanel();
    main();
  });
}
const nextp = document.querySelector(".nextpre");
nextp.addEventListener("click", () => {
  printhtmlpregunta(counterp);
});
function showerror() {
  showPanel(error);
  const text = error.querySelector("p");
  text.textContent = "¿Tienes un error de Base de datos?";
  const errorButton = error.querySelector("button");
  errorButton.addEventListener("click", () => {
    hideAllPanel();
    main();
  });
}
function showCenter() {
  showPanel(center);
  const text = center.querySelector("p");
  text.textContent = "Este Es Tu Desafio";
  const centerButton = center.querySelector("button");
  // centerButton.addEventListener("click", () => {
  //   hideAllPanel();
  //   showEnd();
  // });
  setTimeout(() => {
    centerButton;
  }, 3000);
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
