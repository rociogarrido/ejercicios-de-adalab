// Tenemos un array con el listado de usuarios de nuestra aplicación
const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
// queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'.
const welcomeMessage = names.map((name) => `Bienvenida, ${name}`);

console.log(welcomeMessage);
