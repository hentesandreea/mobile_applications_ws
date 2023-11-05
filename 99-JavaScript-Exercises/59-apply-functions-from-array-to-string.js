// Given an array of functions and a string, apply those functions to the string.
function applyFunctions(functions, str) {

    const result = functions.map(func => func(str))
    console.log(`Function: ` + result);
}
const curated = applyFunctions([
    str => str.toUpperCase(),
    str => str.trim(),
], '    hello  ')
console.log(curated) // Expected output: HELLO
