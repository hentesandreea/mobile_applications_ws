// Use an object to map the name of the month to its number.
function getMonthNumber(monthName) {
 return new Date(`${monthName} 1, 2023`).getMonth() + 1;

}//getMonth starts from  0 that s why we add 1

console.log(getMonthNumber('January')) // Expected output: 1
