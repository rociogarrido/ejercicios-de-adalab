"use strict";

const button = document.querySelector(".button");

// Vamos a preparar un botón y una clase de CSS. La clase tiene que cambiar alguno de los estilos del botón (por ejemplo el color de fondo), pero no se la vamos a poner inicialmente. Cada vez que la usuaria pulse el botón hay que: añadir la clase si no la tiene, quitarla si la tiene.

button.addEventListener("click", function () {
  button.classList.toggle("red");
});