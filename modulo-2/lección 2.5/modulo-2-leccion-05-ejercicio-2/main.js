"use strict";
// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. 

const button = document.querySelector(".button");

// Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.

// Pista: para leer y modificar el contenido de una etiqueta en el caso de los inputs utilizaremos value.
function yourName() {
  const name = document.querySelector(".name").value;
  console.log(`Hola, ${name}`);
}

button.addEventListener("click", yourName);