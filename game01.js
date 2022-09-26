'use strict';

let number = Math.ceil(Math.random() * 100);
let guess = prompt('Загадано число от 1 до 100, попробуй отгадать его');

const checkNumber = guess => {
  if (Number.isNaN(+guess)) {
    guess = prompt('Введи число!');
    checkNumber(guess);
  } else {
    return guess;
  }
};

const foo = (number, guess) => {
  checkNumber(guess);

  if (guess === null) {
    console.log('Игра закончена');
    return;
  }

  if (guess == number) {
    alert('Угадал!');
    console.log('number: ', number);
    console.log('guess: ', guess);
    return;
  }

  if (guess > number) {
    alert('Меньше!');
    foo(number, prompt('Введи число!'));
  }

  if (guess < number) {
    alert('Больше!');
    foo(number, prompt('Введи число!'));
  }
};

foo(number, guess);







