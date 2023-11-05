// Write an arrow function that takes a function and a number as parameters
// and applies that function to that number.
const applyFnToNumber = (funct,nr) => funct(nr)// Write the arrow function here f(nr) = f(x)
const x = (x) => x * 2//functia efectiva f(x) = x * 2
let result = applyFnToNumber(x,5)//aplicarea functiei F(f(x), x)
console.log(result)
applyFnToNumber(nr => nr * 2, 5) // Expected output: 10

