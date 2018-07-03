'use strict';

let obj = {
  value: 4,
  next: [
    {
      value: 3,
      next: [
        {
          value: 6,
          next: [{
            value: 5
          },{
            value: 8
          }]
        },
      ]
    },
    {
      value: 3,
      next: [{
        value: 3,
        next: [{
          value: 3
        }]
      }]
    },
  ],
};


let sum = obj.value;

let nextArrs = [];

if (obj.next) {
  nextArrs = [...obj.next];
}
while (nextArrs.length) {
  let current = nextArrs.shift();
  sum += current.value;
  if (current.next) {
    nextArrs = nextArrs.concat(current.next);
  }
}

console.log(sum);
