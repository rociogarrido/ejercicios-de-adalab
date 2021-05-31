"use strict";
// Vamos a partir de una variable acc con valor 0.
let acc = 0;
// Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. 
for (let i = 1; i <= 10; i++) {
  acc = acc + 2;
}
// Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable acc.
console.log("El resultado es " + acc);