// Compute the least common multiple of 2 numbers.
function lcm(a, b) {
    let p = a * b;
    while( a !== b)
    {
        if(a > b)
        {
            a = a - b;
        }
        else {
            b = b -a;
        }

    }
    return p/ b;

}
console.log(lcm(6, 8)) // Expected output: 24
console.log(lcm(7, 3)) // Expected output: 21
