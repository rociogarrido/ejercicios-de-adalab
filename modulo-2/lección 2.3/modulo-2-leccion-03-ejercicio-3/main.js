'use strict';
// Prepara una variable cuyo valor será un número. Escribe las condiciones para el siguiente ejercicio y utilizando la variable haz pruebas para ver que estas se cumplen.
const num = 15;
if (num === 0) {
  console.log('El número es 0');
} else if (num < 0) {
  console.log('El número es negativo');
} else if (num + 2 > 13 && num + 2 <= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20');
} else if (num > 20 && num < 50) {
  console.log('El número es mayor que 20 pero menor que 50');
} else {
  console.log('el número no es 123123125');
}