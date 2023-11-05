// Check if a string contains only numbers.
function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}
console.log(containsOnlyNumbers('5312531251')) // Expected output: true
console.log(containsOnlyNumbers('# - a 8')) // Expected output: false
