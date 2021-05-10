"use strict";
// Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos: Susana, 34 años, periodista.

const adalaber1 = {
  name: "Susana",
  age: 32,
  job: "periodista",
};

// Luego muestra en la web una frase como esta, accediendo a los datos del objeto: 'Mi nombre es Susana, tengo 34 años y soy periodista'.

const text1 = document.querySelector(".text1");
text1.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

// Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos: Rocío, 25 años, actriz.

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
};

const text2 = document.querySelector(".text2");
text2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;