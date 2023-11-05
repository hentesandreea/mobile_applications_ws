// Create a recursive function that computes the sum of first N numbers.
function recursivelyComputeSumOfFirstN(n) {
return n + recursivelyComputeSumOfFirstN(n-1);
}
console.log(recursivelyComputeSumOfFirstN(4)) // Expected output: 10
