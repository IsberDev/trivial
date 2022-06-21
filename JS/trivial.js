"use strict";

async function mainjson() {
  const errorarea = document.querySelector("p.error");
  try {
    const resjson = await fetch("./quiz.json");
    if (resjson.ok) {
      const data = await resjson.json();
      console.log(data[0]);
    }
  } catch (error) {
    console.log(error.message);
    errorarea.textContent = error.message;
  }
}

mainjson();

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
