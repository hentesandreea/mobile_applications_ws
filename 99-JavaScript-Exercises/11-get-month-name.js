// Given a month, return the month’s name.
function fromMonthNumberToString(monthNunber) {
let s = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December']
return s[monthNunber - 1];
}
console.log(fromMonthNumberToString(1)) // Expected output: January
