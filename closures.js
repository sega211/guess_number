function createLogger() {
   const logs = [];

    return {
        log: function(message) {
            logs.push(message);
        },
        getLogs: function() {
            return [...logs]; 
        }
    };
}

const logger = createLogger();

logger.log("Первое сообщение");
logger.log("Второе сообщение");
logger.log("Третье сообщение");

// console.log(logger.getLogs()); // ["Первое сообщение", "Второе сообщение", "Третье сообщение"]


// console.log(logger.logs); // undefined

function createRandomGenerator(min, max) {
    if (min > max) {
        [min, max] = [max, min]; 
    }

    return function() {
    
        return Math.random() * (max - min) + min;
    };
}


const randomGenerator = createRandomGenerator(10, 20);

// console.log(randomGenerator()); 

// console.log(randomGenerator.min); // Вывод: undefined

