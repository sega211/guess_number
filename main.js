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
let win = false;

function guess () {
    guessNumber = Math.trunc((range.max - range.min + 1) /2) + range.min - 1;
    console.log(`${comp2Name} : Пробую число ${guessNumber}`);
    return guessNumber;
}
//guess();

function answer(guessNumber) {
    
    if (guessNumber < secretNumber) {
        range.min = guessNumber + 1;
        console.log(`${comp1Name}: "Больше"`);
        return false;
    } else if (guessNumber > secretNumber) {
        range.max = guessNumber - 1;
        console.log(`${comp1Name}: "Меньше"`);
        return false;
    } else {
        win = true;
        console.log(`${comp1Name}: "Угадал"`);
        return true;
    }
}

while (!win) {
    guess();
    win = answer(guessNumber);
    console.log(`Текущий диапазон: ${range.min} - ${range.max}`);
}



// answer(guessNumber);
// console.log(range);
// guess();
// answer(guessNumber);
// console.log(range);