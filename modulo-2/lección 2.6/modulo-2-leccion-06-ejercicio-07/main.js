'use strict';

// Vamos a crear un objeto para almacenar la información de un usuario y una constante llamada job donde guardaremos el valor 'developer'. A continuación seguiremos los siguiente pasos:

const job = "frontend developer";
const object = {};

// Usando la notación con punto o la notación con corchetes ([]) (ej: obj.prop o obj["prop"]):
// Añadiremos una propiedad llamada firstName y le asignaremos un valor.
object.firstName = "Macarena";
//Añadiremos una propiedad llamada lastName y le asignaremos un valor.
object.lastName = "González";
//Añadiremos una propiedad llamada age y le asignaremos un valor numérico.
object.age = 33;
// Añadiremos una propiedad job a la que asignaremos el valor de la constante job.
object.job = job;

// Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto.

console.log(object.firstName);
console.log(object.lastName);
console.log(object.age);
console.log(object.job);

// Cambiaremos el nombre del usuario por otro distinto.
object.firstName = "Rocío";
// Aumentaremos en 1 la edad del usuario.
object.age = 38;

// Comprobaremos de nuevo que todo sigue funcionando correctamente.
console.log(object.firstName);
console.log(object.age);