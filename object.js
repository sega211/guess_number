const sumOfNumbers = function(obj) {
    let sum = 0;
    for (let item in obj) {
        const value = obj[item];
        if (typeof value === "number") {
            sum += value;
        }
    }
    return sum;
}



// console.log(sumOfNumbers({"name" : "Igor", "age" : 25, "summery" : 12000}));//12025
// console.log(sumOfNumbers({"car" : "BMV", "age" : 2, "maxSpeed" : 220, "price": 1900000}));//1900222

const sortedItems = function(obj) {
    const sortedKeys = Object.keys(obj).sort();
    return sortedKeys;

}
// console.log(sortedItems({"name" : "Igor", "age" : 25, "summery" : 12000}));// ['age', 'name', 'summery']
// console.log(sortedItems({"car" : "BMV", "age" : 2, "maxSpeed" : 220, "price": 1900000})); //['age', 'car', 'maxSpeed', 'price']