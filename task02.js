'use strict';

const generateArrRandNums = (count, m , n) => {
  const arr = [];

  for (let i = 1; i < count + 1; i++) {
    arr.push(generateRandNum(m, n));
  }

  return arr;
};

const generateRandNum = (m, n) => {
  let range = Math.abs(m - n);
  let numInRange = Math.round(Math.random() * range);
  let min = Math.min(n, m);
  let randNum = (min + numInRange);

  return randNum;
};

console.log(generateArrRandNums(10, -10, 10));
console.log(generateArrRandNums(15, -1, 100));





