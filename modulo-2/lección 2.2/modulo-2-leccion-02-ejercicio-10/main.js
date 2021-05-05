'use strict';
const hoursYear = 365 * 24;
const userAge = document.querySelector('.user__age').innerHTML;
const hoursLived = hoursYear * parseInt(userAge);

console.log(`Has vivido ${hoursLived} horas, viejuna.`);