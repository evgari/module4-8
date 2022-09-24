'use strict';

const generateArrRandNums = (count, m , n, str) => {
  const arr = [];

  for (let i = 1; i < count + 1; i++) {
    if (str) {
      if (str === 'odd') {
        arr.push(generateRandOddNum(m, n));
      } else if (str === 'even') {
        arr.push(generateRandEvenNum(m, n));
      } else {
        arr.push(generateRandNum(m, n));
      }
    } else {
      arr.push(generateRandNum(m, n));
    }  
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

const generateRandOddNum = (m, n) => {
  let randNum = generateRandNum(m, n);
  let min = Math.min(n, m);
  
  if (randNum % 2) {
    return randNum;
  } else {
    if (randNum === min) {
      return randNum + 1;
    } else {
      return randNum - 1;
    }
  }
};

// Ноль делится не только на 2, он делится на все степени двойки. В этом смысле, 0 является «наиболее чётным» числом из всех чисел.
const generateRandEvenNum = (m, n) => {
  let randNum = generateRandNum(m, n);
  let min = Math.min(n, m);
  
  if (randNum % 2 === 0) {
    return randNum;
  } else {
    if (randNum === min) {
      return randNum + 1;
    } else {
      return randNum - 1;
    }
  }
};

console.log(generateArrRandNums(20, 0, 10));
console.log(generateArrRandNums(20, 0, 10, 'aasof'));
console.log(generateArrRandNums(20, 0, 10, 'odd'));
console.log(generateArrRandNums(20, 0, 10, 'even'));















  



