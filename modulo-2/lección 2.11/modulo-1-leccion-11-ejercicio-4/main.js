"use strict";

// Variables y constantes
let input = document.querySelector(".js-name"); // donde introduciremos el valor
const paragraph = document.querySelector(".js-print-name"); // donde imprimiremos el valor introducido en el input

// Función que pinta el valor introducido en el input
function paintValue(ev) {
  paragraph.innerHTML = ev.target.value;
  localStorage.setItem("name", ev.target.value); // para guardar datos
}

// Listener para cada vez que la usuaria escriba su nombre (keyUp)
input.addEventListener("keyup", paintValue);

// Función que consulta localStorage al recargar la página y, si hay algún nombre guardado, rellenar el input y el párrafo.
function uploadName() {
  const savedName = localStorage.getItem("name"); // constante para recuperar los datos
  paragraph.innerHTML = savedName;
  input.value = savedName;
}

uploadName();
