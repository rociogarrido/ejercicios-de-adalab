"use strict";

// Crear una página HTML con un párrafo en el que ponga Hola y un botón.
// Primero creo las constantes para referirme a los elementos del HTML.
const text = document.querySelector(".text");
const button = document.querySelector(".button");

// Cuando se pulse el botón, hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!".
// Ahora tengo que crear la función o "handler".

function sayOle() {
  return (text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!");
}

// listener sobre el elemento "button", tipo de evento "click" y "handler".
button.addEventListener("click", sayOle);