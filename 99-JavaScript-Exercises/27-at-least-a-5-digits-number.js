// Check if the array contains at least a number of at least five digits.
function containsAtLeastFiveLongDigitsNumber(arr) {
    for(let i = 0; i < arr.length; i++)
    {
        copie = arr[i];//retine val lui arr[i]
        contor = 0;
        while(copie!== 0)
        {
            copie= Math.floor(copie/10)//copie/10
            contor++;
        }
           if(contor === 5)//daca nr de cifre ===5
               return true;
    }
    return false;

}
console.log(containsAtLeastFiveLongDigitsNumber([1, 214])) // Expected output: false
console.log(containsAtLeastFiveLongDigitsNumber([21433])) // Expected output: true
