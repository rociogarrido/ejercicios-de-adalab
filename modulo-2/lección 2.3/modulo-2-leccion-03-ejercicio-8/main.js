'use strict';

const year = 2021;

const module = year % 4;

const remainingYear = 4 - module;

const nextLeapYear = year + remainingYear;

console.log(nextLeapYear);