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
    guessNumber = Math.trunc(range.max /2);
    console.log(`${comp2Name} : Пробую число ${guessNumber}`);
    return guessNumber;
}
guess();

