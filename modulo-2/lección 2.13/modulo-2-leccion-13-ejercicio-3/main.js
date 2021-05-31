// Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];
// Tenemos que crear un nuevo array con los saludos.
const welcomeMessage = users.map((user) => {
  if (user.isPremium === false) {
    return `Bienvenida, ${user.name}`;
  } else if (user.isPremium === true) {
    return `Bienvenida, ${user.name}. Gracias por confiar en nosotros.`;
  }
});

console.log(welcomeMessage);
