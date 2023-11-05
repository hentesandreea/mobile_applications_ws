// Create a chain of arrow functions and return the cube of the halved square of a number.
const cubeOfHalfOfSquare =(nr =>{
    let squareOfnr = nr * nr;
    let halvedOfsquare = squareOfnr/2;
    return halvedOfsquare * halvedOfsquare * halvedOfsquare
}) // Create the chain here
console.log(cubeOfHalfOfSquare(2))
/* Expected output: 8

Explanation:
2 squared is 4
half of 4 is 2
2 cubed is 8
*/
