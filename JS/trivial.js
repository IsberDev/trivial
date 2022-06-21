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
