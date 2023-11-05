// Given an operation, return a function that does that operation.
function operation(op) {

    if ( op === '+')//param functie = +
    {
        return ( x, y) => x + y;
    }
    else if( op === '*')
    {
        return (x,y) => x * y;
    }
    else if( op === '-')
    {
        return (x, y) => x - y;
    }
    else if( op === '/')
    {
        return (x,y) => x/y;
    }

}
console.log(operation('+')(2, 5)) // Expected output: 7
console.log(operation('*')(2, 5)) // Expected output: 10
console.log(operation('-')(2, 5)) // Expected output: -3
console.log(operation('/')(5, 2)) // Expected output: 2.5
