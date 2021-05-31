// Vamos a partir de una array con 3 elementos

const numbers = [1, 2, 3];

// Vamos a añadir a la lista tres elementos, usando los métodos avanzados para manipular el DOM, no innerHTML.

// Vamos a crear un loop que por cada elemento del array numbers, que creará un nuevo elemento <li> y un textNode con el elemento del array como contenido.
for (let i = 0; i < numbers.length; i++) {
  const newItem = document.createElement("li"); // Creamos un elemento nuevo, un <li>
  const newContent = document.createTextNode(numbers[i]); // Ahora creamos algo de contenido.
  newItem.appendChild(newContent); // Y se lo añadimos a nuestro <li>

  const list = document.querySelector("ul"); // Creamos referencia a la <ul>
  list.appendChild(newItem); // Añadimos el nuevo li y su contenido a la lista ul
}
