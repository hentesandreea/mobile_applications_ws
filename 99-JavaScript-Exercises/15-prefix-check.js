// Check if a word is the prefix of another word.
function isPrefix(possiblePrefix, word) {
return word.startsWith(possiblePrefix)
}
console.log(isPrefix('pre', 'prenume')) // Expected ouput: true
console.log(isPrefix('car', 'plane')) // Expected output: false
