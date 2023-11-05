// Print the elements of the array in ascending order by using a timing function.
function printAscending(arr) {
  let result = arr.sort((el1, el2) => el1 - el2);
  console.log(result)

}
printAscending([2, 7, 9, 150, 3, 3512])
/* Expected output:
2
3
7
9
150
3512
*/
