'use strict';

let limits = {
  5000: 4,
  1000: 5,
  500: 2,
  100: 5,
  50: 100,
  30: 23
};

function hasMoney(limits) {
  return Object.values(limits).some(quantity => quantity > 0);
}

/* function getMoney(amount) {
  let moneyTypes = Object.keys(limits).map(key => +key);
  moneyTypes.reverse();
  if (amount % moneyTypes[moneyTypes.length - 1]) {
    console.log(amount,  moneyTypes[moneyTypes.length - 1])
    throw new Error('Amount is incorrect');
  }
  let res = {};
  let sum = 0;
  let i = 0;
  while (sum !== amount && hasMoney(limits)) {
    let currentBanknote = moneyTypes[i];
    if (currentBanknote > amount - sum) {
      ++i;
    } else {
      if (limits[currentBanknote]) {
        res[currentBanknote] = res[currentBanknote] ? res[currentBanknote] + 1 : 1;
        sum += currentBanknote;
        limits[currentBanknote] -= 1;
      } else {
        ++i;
      }
    }
  }
  if (sum < amount) {
    throw new Error('Not enough money');
  }
  return res;
} */

function getSum(res) {
  return res.reduce((sum, item) => sum + item, 0);
}

function objKeysToNumArr(obj) {
  return Object.keys(obj).map(key => +key);
}

function arrayToObj(arr) {
  return arr.reduce(
    (obj, item) => ({
      ...obj,
      [item]: obj[item] ? obj[item] + 1 : 1
    }),
    0
  );
}

function getMoney(amount, limits) {
  let newLimits = { ...limits };
  let res = [];
  let moneyTypes = objKeysToNumArr(limits).sort((a, b) => b - a, 0);
  let startIndex = 0;
  while (
    getSum(res) !== amount &&
    hasMoney(newLimits) &&
    startIndex <= moneyTypes.length
  ) {
    let i = startIndex;
    while (moneyTypes[i] > amount - getSum(res)) {
      ++i;
    }
    let currentType = moneyTypes[i];
    if (i === moneyTypes.length) {
      let lastPushed = res.pop();
      newLimits[lastPushed] += 1;
      startIndex = moneyTypes.indexOf(lastPushed) + 1;
    } else {
      if (newLimits[currentType]) {
        newLimits[currentType] -= 1;
        res.push(currentType);
      } else {
        ++i;
      }
    }
  }
  if (getSum(res) < amount) {
    throw new Error("Can't give money");
  }
  return { newLimits, res: arrayToObj(res) };
}

console.log(getMoney(820, limits));
