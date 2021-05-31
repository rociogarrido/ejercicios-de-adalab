"use strict";

// En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. 
let nextHunterMoon = 2017;

// Vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

for (let i = 1; i <= 15; i++) {
  nextHunterMoon += 3;
  console.log("En " + nextHunterMoon + " habrá una Luna del cazador.");  
}