// Compute the product of the numbers of an array without zeros.
function product(arr) {
   p = 1;
    arr.forEach(el =>{
        if(el!== 0)
        {
            p = p * el;
        }
    })
    return p;

}
console.log(product([2, 3, 0])) // Expected output: 6
