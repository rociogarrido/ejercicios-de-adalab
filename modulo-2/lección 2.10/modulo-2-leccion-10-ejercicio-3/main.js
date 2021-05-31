'use strict';

// Crear un buscador de usuarios en Github que nos muestre el nombre, la foto de avatar y el número de repositorios de un usuario que busquemos en el input.

// Definir la función getUser()
function getUser() {
  // Crear una referencia al valor del input
  const username = document.querySelector('.username').value;
  // Hacer una petición fetch a la api de Github https://api.github.com/users/{username} donde "username" es el input que usuario introduzca.
  fetch(`https://api.github.com/users/${username}`)
    // Hacer json() al response del servidor.
    .then((response) => response.json())
    // Con el data que nos devuelve json, crear constantes que hagan referencia a a la imagen del html, el párrafo que contiene el nombre y el que contiene el nº de repositorios.
    .then((data) => {
      const img = document.querySelector('.avatar');
      const name = document.querySelector('.name');
      const numberRepositories = document.querySelector('.repositories');
      // Asignar como valor de estas constantes los datos que hemos obtenido de la api. En este caso, las propiedades que queremos acceder son: "name" (nombre), "avatar_url" (imagen) y "public_repos" (nº de repositorios).
      img.src = data.avatar_url;
      name.innerHTML = data.name;
      numberRepositories.innerHTML = data.public_repos;
    });
}

// Crear una referencia al botón de buscar.
const button = document.querySelector('.btn');

// Añadir al botón un evento que llame a una función getUser().
button.addEventListener('click', getUser);