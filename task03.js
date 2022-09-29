'use strict';

const generateArrRandNums = (count, m , n, str) => {
  const arr = [];

  for (let i = 1; i < count + 1; i++) {
    arr.push(generateRandNum(m, n));
  }

  if (str) {
    const newArr = arr.map(item => {
      if (str !== 'odd' && str !== 'even') return item;
      if ((str === 'odd' && item % 2) || (str === 'even' && !(item % 2))) return item;
      if (item !== Math.min(m, n)) {
        return item - 1;
      } else {
        return item + 1;
      }
    });

    return newArr;
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

console.log(generateArrRandNums(20, 1, 10));
console.log(generateArrRandNums(20, 0, 10, 'aasof'));
console.log(generateArrRandNums(10, 0, 10, 'odd'));
console.log(generateArrRandNums(20, 9, 20, 'even'));



