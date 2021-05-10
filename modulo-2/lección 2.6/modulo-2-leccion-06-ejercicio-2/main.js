"use strict";
// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.

const adalaber1 = {
  name: "Susana",
  age: 32,
  job: "periodista",
  run: (text) => `${text}`,
  // Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. 
  runAMarathon: (distance) => `Estoy corriendo una maratón de ${distance} km.`,
};

console.log(adalaber1.run('Estoy corriendo.'));

// Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.

console.log(adalaber1.runAMarathon(50));