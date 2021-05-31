"use strict";

const text = document.querySelector(".container");

// Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.

function changeColor() {
  const scrollHeight = window.scrollY; // window.scrollY nos devuelve la posición del scroll vertical.
  if (scrollHeight > 250) {
    text.classList.add("turquoise");
    text.classList.remove("violet");
  } else {
    text.classList.add("violet");
    text.classList.remove("turquoise");
  }
}

// Escuchar el evento scroll sobre la ventana window.
window.addEventListener("scroll", changeColor);
