"use strict";


async function getjson(urljson) {
  let response = await fetch(urljson);
  let datos = await response.json();
  //  console.log(datos.results);
  return datos.results;
}

async function main() {
  const dat = await getjson( "./data.json");
 
  console.log(dat);
}

main();
