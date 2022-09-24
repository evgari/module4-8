'use strict';

const generateArrRandNums = (count, m , n, str) => {
  const arr = [];

  for (let i = 1; i < count + 1; i++) {
    arr.push(generateRandNum(m, n));
  }

  if (str) {
    if (str === 'odd') {

      const oddArr = arr.map(item => {
        if (item % 2) return item;
        if (item % 2 === 0 && item === Math.min(m, n)) return item + 1;
        return item - 1;
      });

      return oddArr;

    } else if (str === 'even') {

      const evenArr = arr.map(item => {
        if (item % 2 === 0) return item;
        if (item % 2 && item === Math.min(m, n)) return item + 1;
        return item - 1;
      });

      return evenArr;

    } else {
      return arr;
    }
  } else {
    return arr;
  }
};

const generateRandNum = (m, n) => {
  let range = Math.abs(m - n);
  let numInRange = Math.round(Math.random() * range);
  let min = Math.min(n, m);
  let randNum = (min + numInRange);

  return randNum;
};


console.log(generateArrRandNums(20, 0, 10));
console.log(generateArrRandNums(20, 0, 10, 'aasof'));
console.log(generateArrRandNums(20, 0, 10, 'odd'));
console.log(generateArrRandNums(20, 0, 10, 'even'));