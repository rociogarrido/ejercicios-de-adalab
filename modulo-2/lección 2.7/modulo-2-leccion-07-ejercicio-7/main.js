"use strict";
// En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.

const adalabers = [
  {
    name: "María",
    age: 29,
    job: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "diseñadora",
  },
];

// Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.

// Una función countAdalabers que devuelve el número de adalabers en el listado.

function countAdalabers() {
  return adalabers.length;
}

// Una función averageAge que devuelve la media de edad de listado.

function averageAge() {
  // variable a la que se le asignará la suma de todas las edades
  let acc = 0;
  for (let i = 0; i < adalabers.length; i++) {
    acc += adalabers[i].age;
  }
  return acc / adalabers.length;
}

// Una función theYoungest que devuelve el nombre de la adalaber más joven.

function theYoungest() {
  let minAge = adalabers[0].age;
  let youngest = "";
  for (let i = 0; i < adalabers.length; i++) {
    if (youngest > minAge) {
      youngest;
    }
  }
  return youngest;
}

// Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

function countDesigners() {
  let designers = 0;
  for (let i = 0; i < adalabers.length; i++) {
    if (arr[i].job === "diseñadora") {
      designers += 1;
    }
  }
  return designers;
}

// Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento.

console.log(
  "El número de adalabers en el listado es " + countAdalabers(adalabers)
);
console.log("La edad media de las adalabers es " + averageAge(adalabers));
console.log("La adalaber más joven es " + theYoungest(adalabers));
console.log(
  "El número de adalabers diseñadoras es " + countDesigners(adalabers)
);
