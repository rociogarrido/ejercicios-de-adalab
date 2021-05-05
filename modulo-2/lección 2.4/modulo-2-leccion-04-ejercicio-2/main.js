// Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

let a = 2; 
let b = 4; 
let c = 6; 
let d = 8;

function mediaNumbers (a , b , c , d) {
    return (a + b + c + d) / 4;
}

const resultMedia = mediaNumbers (a,b,c,d);

console.log('La media de estos números es:', resultMedia);