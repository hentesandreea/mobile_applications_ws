// Bring even numbers in front of an array.
function evenFirst(arr) {
let evenNr = arr.filter(nr => nr %2 === 0)
    let oddNr = arr.filter(el => el % 2 !==0)
    const list = evenNr.concat(oddNr)
console.log(list)
}
console.log(evenFirst([1, 3, 3, 7, 4, 2, 0]))
// Expected output: [4, 2, 0, 1, 3, 3, 7]
