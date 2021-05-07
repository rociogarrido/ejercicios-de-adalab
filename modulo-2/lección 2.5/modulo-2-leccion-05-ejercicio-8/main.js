"use strict";

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

// Partiendo del ejercicio anterior vamos a añadir un nuevo botón a nuestra página. Los dos botones deben tener el mismo handler. Cuando la usuaria pulse un botón el cambio de clase sucederá solamente sobre el botón pulsado. Asignamos a una constante el elemento sobre el que pusimos el `listener` para trabajar cómodamente con él.

function handleButton(event) {
  event.currentTarget.classList.toggle("red");
  }
  
button1.addEventListener('click', handleButton);
button2.addEventListener('click', handleButton);