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
//tiempo limite para respuesta- ok

let cretime = `<p class=time></p>`;
document.querySelector(".divtime").innerHTML = cretime;
document.querySelector(".time").innerHTML = time;
clearInterval(timeinterval);

// pintura en el html de respuestas y preguntas -ok
const printhtmlpregunta = (i) => {
  counterp++;
  const q = data[i];
  let a = q.answers;
  //cambiar de posicion todoas las respuestas randon en cada pregunta de forma aleatoria
  a = a.sort((a, b) => Math.floor(Math.random() * 3) - 1);
  //mirar
  const htmlanswersarray = a.map(
    (currentA) =>
      `<p class=answer><button class=evaluar>X</button><span>${currentA}</span></p>`
  );
  //prueva de codigos de diferentes llamadas al click desde html o desde cresacion de html con llamada integrada no funcina.
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

///contador descuento de tiempo con alerta de fin de tiempo--- subida con contador negativo y siguiente pregunta

//evaluador de respuestas y comprobacion--------------------------mirar no ok

const evaluarans = (answers) => {
  const padrepre = document.querySelectorAll("p.answer");
  document
    .querySelectorAll(".answer")
    .forEach((a) => a.classList.remove("right", "wrong"));

  if ((answers = rightanswers)) {
    const text = end.querySelector(".aciertos");
    text.textContent = "Acertaste";
    //fallo de in not difine
    padrepre.classList.add("right");
    rightans++;
    document.querySelector.add(".verdad").innerHTML = rightans;
    const audioV = new Audio("/Sonido/Correcto.mp3");
    audioV.play();
  } else answers !== rightanswers;
  const text = end.querySelector(".aciertos");
  text.textContent = "Fallaste";

  padrepre.classList.add("wrong");
  wrongans++;
  document.querySelector.add(".mentira").innerHTML = wrongans;
  const audioF = new Audio("/Sonido/incorrecto.mp3");
  audioF.play();
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
  // Guardamos las usuario en el local storage.
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
  // Vaciamos el array de local storage para el user.
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
    //parametro evaluarans me rompre en codigo dentro de funcion -mirar no ok
    //evaluarans();
    setTimeout(() => {
      hideAllPanel();
      showEnd();
    }, 3000);
    clearInterval(timeinterval);
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

  timeinterval = setInterval(() => {
    time--;
    if (time == 0) {
      alert("Se acabo el tiempo");
      clearInterval(timeinterval);
    } else {
      document.querySelector(".time").innerHTML = time;
    }
  }, 1000);
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
  //llamada al click del boton centrar de las pregunta y no del panel con un retador de 3 segundos-mirar
  centerButton.addEventListener("click", () => {
    hideAllPanel();
    showEnd();
  });
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
    ///contador descuento de tiempo con alerta de fin de tiempo subida con contador negativo y siguiente pregunta

    timeinterval = setInterval(() => {
      time--;
      if (time == 0) {
        alert("Se acabo el tiempo");
        clearInterval(timeinterval);
        wrongans++;
        counterp++;
        // colocar un fin de tiempo pregunta
      } else {
        document.querySelector(".time").innerHTML = time;
      }
    }, 1000);

    //llamada al contador pregunta para primera pregunta que no inicien contador en primera portal- mirar
  });
}

main();
