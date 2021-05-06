// Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces, una compañera ha sugerido hacer una función llamada getEl.
function getEl(selector) {
    const element = document.querySelector(selector);
    // Comprobar si la constante tiene valor alguno o no, si es truthy o falsy. 
    // Si element existe, es truthy, return su valor
    if (element) {
      return element;
    // si element es false, mandar error
    } else {
      console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    }
  }
  
// Creamos constantes que utilizan la función creada para hacer referencia a los diferentes elementos de nuestro html:

const titleEl = getEl("h1");
const pSuccessEl = getEl('.success');
const pWarningEl = getEl('.warning');
const btnEl = getEl('#btn');
const gromenauer = getEl("h2");

  