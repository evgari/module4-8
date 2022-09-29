'use strict';

let number = Math.ceil(Math.random() * 100);
let guess = prompt('Загадано число от 1 до 100, попробуй отгадать его');

const getUserNumber = guess => {
  if (Number.isNaN(parseInt(guess))) {
    guess = prompt('Введи число!');
    checkNumber(guess);
  } else {
    return guess;
  }
};

const foo = (number, guess) => {
  getUserNumber(guess);

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
    console.log('guess: ', guess);
    foo(number, prompt('Введи число!'));
  }

  if (guess < number) {
    alert('Больше!');
    console.log('guess: ', guess);
    foo(number, prompt('Введи число!'));
  }
};

foo(number, guess);







