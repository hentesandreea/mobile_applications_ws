// Count how many apples (green and red) are in an array of fruits.
function countApples(arr) {
    let k = 0;
    for(let i = 0; i< arr.length; i++)
    {
       if( arr[i] == 'apple')
       {
           return k++;
       }
    }
}
console.log(countApples(['apple',' apple', 'banana', 'coconut']))
// Expected output: 2
