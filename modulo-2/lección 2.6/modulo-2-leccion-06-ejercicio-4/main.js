"use strict";
// Tenemos que preparar un botón con un listener para loguear el objeto event en la consola.

const button = document.querySelector(".button");

button.addEventListener("click", function (event) {
  console.log(event);
});

// Investigar si la clave type que encontramos en él es una propiedad o un método. Nota: cuando logueamos un objeto en la consola, a su izquierda aparece un triangulo que nos permite desplegarlo para ver sus métodos y propiedades.