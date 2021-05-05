'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';

// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

// 1. Añadir desde JS la imagen userAvatar ala etiqueta de HTML img.
const img = document.querySelector('.user__avatar');

// 2. Que userAvatar pueda no contener una URL porque el usuario no encontraba ninguna foto molona cuando se registró.
userAvatar = '';

// 3. La ficha de usuario tiene que tener imagen sí o sí (avatar de usuario o avatar por defecto).
img.setAttribute("src", userAvatar || DEFAULT_AVATAR);