// Sum up the numbers of an array.
function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++)
    {
        s = s + arr[i];
    }
    return s;

}
console.log(sum([2, 1, 4, 7]))// Expected output: 14
