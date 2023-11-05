// Check if an array contains a given value exactly twice.
function containsTwice(arr, x) {
    let k = 0;
    for(let i = 0 ; i < arr.length ; i++)
    {

        if (arr[i] == x)
        {
            k++;
        }

    } if (k == 2)
    {
        return true
    } else
    {
        return false;
    }
   /* if(arr.filter(el => el === x).length=== 2){
        return true;
    }
    else{
        return false;
    }*/
}

console.log(containsTwice([1, 2, 2], 2)) // Expected output: true
console.log(containsTwice([4, 1, 0, 9], 0)) // Expected output: false
console.log(containsTwice([3, 3, 3, 3], 3)) // Expected output: false
