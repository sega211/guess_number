const rangeLength = 100;
let range = {
    min: 1,
    max: rangeLength
  };
const secretNumber = Math.trunc(Math.random() * rangeLength) + 1;
let guessNumber;


const comp1Name = "Компьютер 1"; 
const comp2Name = "Компьютер 2"; 
console.log(`${comp1Name}: загадал число ${secretNumber}`);
let win = false;

function guess (currentRange) {
    if (currentRange.min === currentRange.max) {
        guessNumber = currentRange.min
    } else {
        guessNumber = Math.trunc((range.max - range.min + 1) /2) + range.min - 1;
    }
    
    console.log(`${comp2Name}: Пробую число ${guessNumber}`);
    return guessNumber;
}


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
    guess(range);
    win = answer(guessNumber);
    //console.log(`Текущий диапазон: ${range.min} - ${range.max}`);
}



