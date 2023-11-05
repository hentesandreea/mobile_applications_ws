// Make an array of only the top three contestants (they are in ascending order).
function onlyTopThree(arr) {
console.log(arr.slice(0,3));
}
const participants = ['Kars', 'Joseph', 'Caesar', 'Lisa', 'George']
console.log(onlyTopThree(participants))
// Expected output: ['Kars', 'Joseph', 'Caesar']
//array.slice(start, end)