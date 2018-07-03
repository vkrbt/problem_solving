'use strict';

let limits = {
  5000: 4,
  1000: 5,
  500: 2,
  100: 5,
  50: 100,
};

function hasMoney(limits) {
  return Object.values(limits).some(quantity => quantity > 0);
}

function getMoney(amount) {
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
}

// function getSum(resObj) {
//   let sum = 0;
//   for (let key in resObj) {
//     sum += key * resObj[key];
//   }
//   return sum;
// }

// function objKeysToNumArr(obj) {
//   return Object.keys(obj).map(key => +key)
// }

// function getMoney(amount, limits) {
//   let res = {};
//   let newLimits = {...limits};
//   const limitsArr = objKeysToNumArr(limits);
//   limitsArr.reverse();
//   let startPos = 0;
//   while (getSum(res) !== amount) {
//     let i = startPos;

//     while (limitsArr[i] > (amount - getSum(res)) && newLimits[limitsArr[i]] > 0) {
//       ++i;
//     }

//     if (limitsArr[i] === undefined) {
//       let maxKey = Math.max.apply(null, objKeysToNumArr(res));
//       startPos = limitsArr.indexOf(maxKey) + 1;
//       res = {};
//       newLimits = {...limits};
//     }
//     if (limitsArr[i] <= (amount - getSum(res))) {
//       res[limitsArr[i]] = res[limitsArr[i]] ? res[limitsArr[i]] + 1 : 1;
//       newLimits[limitsArr[i]] -= 1;
//      }
//   }
//   return {res, newLimits};
// }


console.log(getMoney(31500));
