'use strict';
let breeds = '';
let randomNumber = 0
// Crear función
function getBreedsImage () {
  // 1. Pedir listado de razas de perros a la API de los perros
  fetch('https://dog.ceo/api/breeds/list')
    .then(firstResponse => firstResponse.json())
    .then(firstData => {
      // guardo el listado en una constante
      breeds = firstData.message;
      const breedsLength = breeds.length - 1;
      // pedir número aleatorio de la API rand.fun.
      return fetch('https://api.rand.fun/number/integer?max=' + breedsLength);
    })
    .then(secondResponse => secondResponse.json())
    .then(secondData => {
      // guardamos el número en una constante
      randomNumber = secondData.result
      // 4. pedimos imagen de perro de la raza seleccionada al API de los perros:
      return fetch(`https://dog.ceo/api/breed/${breeds[randomNumber]}/images/random`);
    })
    .then(thirdResponse => thirdResponse.json())
    .then(thirdData => {
      // Referencias a los elementos del html que vamos a pintar
      const message = document.querySelector('.message');
      const image = document.querySelector('img');
      // Pintar
      message.innerHTML = breeds[randomNumber] 
      image.src = thirdData.message;
      image.alt = 'Perrete'
    });
}
// Event listener de click en el documento, para actualizar datos cuando hagamos click
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedsImage);