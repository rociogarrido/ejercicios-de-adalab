"use strict";

// CREAMOS CONSTANTES

const citySelect = document.querySelector("#city-select"); // La que se refiere al elemento select

const container = document.querySelector(".image-container"); // La que se refiere al image container, donde irá la imagen

const newItem = document.createElement("img"); // La que crea un elemento de imagen

// Añadimos el nuevo item como hijo de container (de momento está vacío)
container.appendChild(newItem);

// CREAMOS FUNCIÓN
// La función se encarga de, dependiendo del valor del elemento select, mostrar una foto u otra

function showCity() {
  // Cambiamos el atributo de src del newItem dependiendo de la ciudad que se elija
  if (citySelect.value === "belgrade") {
    newItem.setAttribute("src", "./images/belgrade.jpg");
  } else if (citySelect.value === "moscow") {
    newItem.setAttribute("src", "./images/moscow.jpg");
  } else if (citySelect.value === "mostar") {
    newItem.setAttribute("src", "./images/mostar.jpg");
  }
}

// EVENT LISTENER
// El elemento select va a estar escuchando un "cambio de valor" (change) para ejecutar la función showCity()
citySelect.addEventListener("change", showCity);
