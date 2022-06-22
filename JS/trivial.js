"use strict";

// funcion para gestionar error el cual se gestina con un panel de errores de html y llamada del json
async function mainjson() {
  const errorarea = document.querySelector("p.error");
  try {
    const resjson = await fetch("./quiz.json");
    if (resjson.ok) {
      const data = await resjson.json();
      //console.log(data[0]);
    }
    //throw new Error("Mi error");
  } catch (error) {
    //console.log(error.message);
    errorarea.textContent = error.message;
  }
}

mainjson();
//------------------------------------------------------------------------

const form = document.forms.User;

form.addEventListener("submit", (e) => {
  // Prevenimos que se envie el formulario al pulsar el botón.
  e.preventDefault();
  const player = form.elements.User;
  // Creamos una nueva entrada para localstore con la variable player user con el texto del input.
  addPlayer(player.value);
  // Vaciamos el input.
  player.value = "";
});

const saveuser = () => {
  // Convertimos a una cadena de texto JSON el array de tareas.
  const userjson = JSON.stringify(usuario.user);

  // Guardamos las tareas en el local storage.
  window.localStorage.setItem("Player", userjson);
};

const addPlayer = (text) => {
  usuario.user.push({ text: text });
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
  saveTasks();
};

//Obtenemos las tareas almacenadas en el Local Storage (si las hay).
const localStorageuser = window.localStorage.getItem("Player");
// * Si en la constante anterior recibimos un valor, JavaScript se tomará
//  * eso como un true (la variable NO está vacía). En este caso nos quedamos
//  * con lo que haya en el localStorage.
//  *
//  * De lo contrario, si localStorageTasks está vacío, "tasks" será igual
//  * a un array vacío.
const respartida = {
  user: localStorageuser ? JSON.parse(localStorageuser) : [],
};
//-----------------------------------------------------------

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

const localStoragewser = window.localStorage.getItem("Player");

// const deletelocal = () => {
//   // Vaciamos el array de tareas.
//   Player = [];

//   // Guardamos los cambios en el localStorage.
//   saveTasks();
// };

// const saveTasks = () => {
//   // Convertimos a una cadena de texto JSON el array de tareas.
//   const tasksJSON = JSON.stringify(State.tasks);

//   // Guardamos las tareas en el local storage.
//   window.localStorage.setItem("tasks", tasksJSON);
// };
