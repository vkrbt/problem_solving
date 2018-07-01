'use strict';

// Implement function myNew in following way
// var person = myNew(Person, "Vasia", 34);
// person instanceof Person === true;

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function myNew(C, ...args) {
  const obj = Object.create(C.prototype);
  C.apply(obj, args);
  return obj;
}

const person = myNew(Person, "Vasia", 34);

console.log(person instanceof Person);
