// Create an object that stores arithmetic functions.
const arithmeticFunctions = {
    addition : (x,y) => x + y,
    multiply: (x,y) => x *y,
    substract: (x,y) => x-y,
    divide: (x,y) => x/y,
};// Create the object here
console.log(arithmeticFunctions.addition(2,5))// Expected output: 7
console.log(arithmeticFunctions.multiply(2, 5)) // Expected output: 10
console.log(arithmeticFunctions.substract(2, 5)) // Expected output: -3
console.log(arithmeticFunctions.divide(5, 2)) // Expected output: 2.5
