'use strict';

let number = Math.ceil(Math.random() * 5);

const foo = (number) => {
  let guess = prompt('Загадано число от 1 до 100, попробуй отгадать его');

  if (guess === null) {
    console.log('Игра закончена');
    return null;
  }

  if (guess > number) {
    alert('Меньше!');
    return false;
  } else if (guess < number) {
    alert('Больше!');
    return false;
  } else {
    alert('Угадал!');
    console.log('Игра закончена');
    return true;
  }
};

let flag = foo(number);

while (!flag || flag !== null) {
  flag = foo(number);
}

