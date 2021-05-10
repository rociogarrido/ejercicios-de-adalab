"use strict";

// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.

const adalaber1 = {
  name: "Susana",
  age: 32,
  job: "periodista",
  run: (text) => `${text}`,
  runMarathon: (distance) => `Estoy corriendo una maratón de ${distance} km.`,
  showBio: function () {
    return "Mi nombre es " + this.name + ", tengo " + this.age + " años y soy " + this.job;
  },
};

console.log(adalaber1.showBio());

// Hacemos lo mismo para adalaber2 definida en el ejercicio 1. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
  showBio: function () {
    return "Mi nombre es " + this.name + ", tengo " + this.age + " años y soy " + this.job;
  },
};

console.log(adalaber2.showBio());