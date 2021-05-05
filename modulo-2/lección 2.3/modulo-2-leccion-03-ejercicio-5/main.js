'use strict';
/*
  Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
  Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
  Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'
*/

const container = document.querySelector('.js-div');
let textTitle = '';
let textMessage = '';

if (container.classList.contains('warning')) {
  textTitle = 'AVISO';
  textMessage = 'Tenga cuidado';
} else if (container.classList.contains('error')) {
  textTitle = 'ERROR';
  textMessage = 'Ha surgido un error';
} else if (container.classList.contains('success')) {
  textTitle = 'CORRECTO';
  textMessage = 'Los datos son correctos';
}
container.querySelector('.js-title').innerHTML = textTitle;
container.querySelector('.js-text').innerHTML = textMessage;
