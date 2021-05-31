'use strict';
 
function get100Numbers () { // Vamos a crear una función get100Numbers
    let numArr = 0;
    let numbers = [] // que devuelve un array con los números del 1 al 100.
for (let i = 0; i <= 99; i++) {
    numArr++;
    numbers.push(numArr); // Usaremos un bucle y el método push para ir guardándolos. 
  }
  return numbers;
}

// Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.
console.log(get100Numbers());