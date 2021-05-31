"use strict";

// Partimos de array con notas:
const marks = [5, 4, 6, 7, 9];

// Creamos nueva array "inflatedMarks" cuyo contenido será igual que marks, pero todas las notas incrementadas 1 punto.

const inflatedMarks = marks.map((mark) => mark + 1); // utilizo el método map() sobre el array "marks".

console.log(inflatedMarks);
