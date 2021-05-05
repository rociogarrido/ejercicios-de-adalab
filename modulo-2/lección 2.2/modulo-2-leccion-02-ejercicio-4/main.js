'use strict';
const totalPeople = 9;
const totalBill = 128;

let totalEach = (totalBill / totalPeople) - 2;
let totalAna = totalEach + 2;
let text = 'Cada una paga ';
let textAna = 'Ana paga ';
console.log(text + totalEach + '€');
console.log(textAna + totalAna + '€');