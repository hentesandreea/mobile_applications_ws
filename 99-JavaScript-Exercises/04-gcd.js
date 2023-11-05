// Compute the greatest common divisor of 2 numbers.
function gcd(a, b) {
   /* let r = 0;
    while((a%b)>0)
    {
        r = a % b;
        a = b;
        b = r;
    }
    return b;
 }*/
    while (a !== b) {
        if (a > b)
             a = a - b;
        else
             b = b - a;
    }
    return b;
}
console.log(gcd(2, 8)) // Expected output: 2
console.log(gcd(6, 8)) // Expected output: 2
