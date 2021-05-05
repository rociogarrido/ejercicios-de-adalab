'use strict';
// Prueba que el código funciona correctamente con distintos años (1, 2, 12...).
const dogAge = 7;


// El segundo año de un perro equivale a nueve años de humano.
const firstYear = 15;

// El primer año de un perro equivale a 15 años de humano.
const secondYear = firstYear + 9;

// A partir del tercero, cada año de perro equivale a 5 años de humano.
const moreYears = secondYear + (dogAge - 2) * 5;

if (dogAge === 1) {
    console.log(`El perro tiene ${firstYear} años humanos.`);
} else if (dogAge === 2) {
    console.log(`El perro tiene ${secondYear} años humanos.`);
} else if (dogAge > 2) {
    console.log(`El perro tiene ${moreYears} años humanos.`);
}
