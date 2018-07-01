'use strict';

// Implemet functions one, five, add, subtract
// five(add(one())) === 6
// five(subtract(one())) === 4

function add(num1) {
  return function(num2) {
    return num2 + num1;
  }
}

function subtract(num1) {
  return function(num2) {
    return num2 - num1;
  }
}

function one(cb) {
  if (cb) {
    return cb(1)
  }
  return 1;
}

function five(cb) {
  if (cb) {
    return cb(5)
  }
  return 5;
}

console.log(five(add(one())) === 6)
console.log(five(subtract(one())) === 4)
