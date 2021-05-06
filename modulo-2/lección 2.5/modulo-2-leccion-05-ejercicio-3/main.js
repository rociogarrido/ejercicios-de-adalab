"use strict";
// Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.

const text = document.querySelector(".text");

function addParagraph() {
  const newText = document.createElement("p");
  newText.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
  text.appendChild(newText);
}

text.addEventListener("mouseover", addParagraph);