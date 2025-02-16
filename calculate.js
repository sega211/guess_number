function calculate(num1, num2, calculateFunction) {
    return calculateFunction (num1, num2)
}
function multiply(num1, num2) {
    return num1 * num2;
}

function sum (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

const operations = {
    multiply : multiply,
    sum: sum,
    subtract : subtract,
    divide : divide
};
const selectedOperation1 = "multiply";
const selectedOperation2 = "sum";
const selectedOperation3 = "subtract";
const selectedOperation4 = "divide";

// console.log(calculate (10, 5, operations[selectedOperation1]));//50
// console.log(calculate (10, 5, operations[selectedOperation2]));//15
// console.log(calculate (10, 5, operations[selectedOperation3]));//5
// console.log(calculate (10, 5, operations[selectedOperation4]));//2