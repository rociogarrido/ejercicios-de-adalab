'use strict';
// Crear una función que reciba por parámetro un número y nos devuelva true si es par y false si es impar.

function checkNumber(n) {
  if (n % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

// Ejecutala e imprime el resultado para comprobar que funciona.

const result = checkNumber (7);

console.log('El número es',result);