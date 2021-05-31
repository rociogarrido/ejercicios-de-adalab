"use strict";

// Crear variables y constantes
let counter = 0;
let temp;
const stopBtn = document.querySelector(".stop"); // Botón de stop
const resetBtn = document.querySelector(".reset"); // Botón de reset

// Función aumentar el contador y pintarlo en el html
function paintCounter() {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
}
