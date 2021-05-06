"use strict";
const container = document.querySelector("body");

// Al pulsar la tecla 'r', su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document.

function changeColor(event) {
  if (event.key === "r") {
    container.classList.add("red");
    container.classList.remove("violet");
  } else if (event.key === "m") {
    container.classList.add("violet");
    container.classList.remove("red");
  }
}

document.addEventListener("keydown", changeColor);