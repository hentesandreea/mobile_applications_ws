// Extract only numbers out of an array of everything.
function curateArrayToNumberArray(arr) {
    return arr.filter(el => typeof el === 'number');

}

console.log(curateArrayToNumberArray([1, 'race', { id: 5 }, 4, 'f']))
// Expected output: [1, 4]
