/* Compute the value of the following function:
     case 1: 2 * x + 3, x < 3
 x = case 2: 24 + x, x in [3, 7)
     case 3: -x, x >= 7
 */
function f(x) {
    if( x < 3)
    {
        return 2 * x + 3;
    }
    if( x >= 3 && x < 7)
    {
        return 24 + x;
    }
    if( x >= 7 )
    {
        return -x;
    }

}
console.log(f(2)) // Expected output: 7
console.log(f(3)) // Expected output: 27
console.log(f(9)) // Expected output: -9
