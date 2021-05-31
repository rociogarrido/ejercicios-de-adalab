"use strict";

const book = document.querySelector(".book");
const film = document.querySelector(".film");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

let arrayBooksFilms = [];

button.addEventListener("click", function () {
  const bookValue = book.value;
  const filmValue = film.value;
  
  arrayBooksFilms.push(bookValue);
  arrayBooksFilms.push(filmValue);
  // Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "
  for (let i of arrayBooksFilms) {
    message.innerHTML += `A mí también me encantó ${i}. `;
  }
});
