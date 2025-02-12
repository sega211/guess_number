const rangeLength = 100;
let range = {
    min: 1,
    max: rangeLength
  };
const secretNumber = Math.trunc(Math.random() * rangeLength) + 1;
let guessNumber;
console.log(secretNumber);
console.log(range.max);
const comp1Name = "Компьютер 1"; 
const comp2Name = "Компьютер 2"; 

function guess () {
    guessNumber = Math.trunc((range.max - range.min + 1) /2);
    console.log(`${comp2Name} : Пробую число ${guessNumber}`);
    return guessNumber;
}
guess();

function answer(guessNumber) {
    let win = 0;
    if (guessNumber < secretNumber) {
        range.min = guessNumber + 1;
        console.log(`${comp1Name}: "Больше"`);
        return range.min;
    } else if (guessNumber > secretNumber) {
        range.max = guessNumber - 1;
        console.log(`${comp1Name}: "Меньше"`);
        return range.max;
    } else {
        win = 1;
        console.log(`${comp1Name}: "Угадал"`);
        return win;
    }
}



// answer(guessNumber);
// console.log(range);
// guess();
// answer(guessNumber);
// console.log(range);