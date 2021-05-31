"use strict";
// Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera.
const numbers = [44, 38, 7, 2, 62];

// Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. 
let acc = 0;

//  Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5).
for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i]/5;
   }

// Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.
console.log(average(numbers));

// Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length.
function average(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }
  return "La media es igual a: " + acc / numbers.length;
}

// Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

console.log(average(numbers));