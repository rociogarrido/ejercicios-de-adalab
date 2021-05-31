'use strict';

function get100Numbers () {
  let numbers = []
  for (let i = 0; i <= 100; i++) {
    numbers.push(i+1);
    console.log(numbers[i]);
  }
  return numbers
}

function getReversed100Numbers() {
  let numbersReverse = get100Numbers()
  numbersReverse = numbersReverse.reverse();
  console.log(numbersReverse)
}
getReversed100Numbers()