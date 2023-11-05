// Check if a string is palindrome (its’ reverse is equal to the string itself).
function isPalindrome(str) {
if(str ===  str.split("").reverse().join('')){
    return true;
}
else {
    return false;
}
}
console.log(isPalindrome('radar')) // Expected output: true
console.log(isPalindrome('craftsman')) // Expected outpute: false
//str.split('')-transformi srting n lista