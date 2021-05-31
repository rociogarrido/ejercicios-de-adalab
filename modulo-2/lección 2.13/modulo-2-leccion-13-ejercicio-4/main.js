// vamos a utilizar el listado de usuarios del ejercicio 3.
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

// ahora queremos tener un listado de usuarios (en un array premiumUsers) que solo tenga los usuarios premium, con filter.

const premiumUsers = users.filter((user) => user.isPremium === true);

console.log(premiumUsers);
