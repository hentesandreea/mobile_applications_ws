// Compute the factorial of a number.
function factorial(n) {
    let x = 1;
while( n !== 0)
{
    x = x * n;
    n --;
}
return x;
}
console.log(factorial(3)) // Expected output: 6
console.log(factorial(5)) // Expected output: 120
