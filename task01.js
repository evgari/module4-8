'use strict';

const generateArrRandNums = count => {
  const arr = [];

  for (let i = 1; i < count + 1; i++) {
    arr.push(generateRandNum());
  }

  return arr;
};

const generateRandNum = () => {
  let randNumber = Math.ceil(Math.random() * 100);
  return randNumber;
};

console.log(generateArrRandNums(30));

