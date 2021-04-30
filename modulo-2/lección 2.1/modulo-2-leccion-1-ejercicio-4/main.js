'use strict';

const titleH1 = document.querySelector('h1');
console.log(titleH1.classList);

const adalaber1 = document.querySelector('.adalaber1');

titleH1.innerHTML = titleH1.innerHTML + adalaber1.innerHTML;
titleH1.innerHTML +=  adalaber1.innerHTML;



const list = document.querySelector('.list');

console.log(list.textContent);