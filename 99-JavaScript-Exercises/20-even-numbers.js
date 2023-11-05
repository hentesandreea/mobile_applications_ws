// Print all even numbers from an array.
function printEvenNumbers(arr) {

    for(let i = 0 ; i < 10; i++)
    {
        if(arr[i] % 2 == 0)
        {
            console.log(arr[i])
        }
    }
}
printEvenNumbers([1, 2, 3, 4, 5]) // Expected output: 2 4
