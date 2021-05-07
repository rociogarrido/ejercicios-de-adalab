"use strict";
// Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.

const text = document.querySelector(".text");
const main = document.querySelector('.main');

const addParagraph = () => { 
  main.innerHTML += `<p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>`;
  const text = document.querySelector(".text");
  text.addEventListener("mouseover", addParagraph);
}

text.addEventListener("mouseover", addParagraph);