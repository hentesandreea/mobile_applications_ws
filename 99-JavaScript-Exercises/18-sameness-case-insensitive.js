// Check if two strings are the same, case-insensitive.
function isSame(str1, str2) {

    if( str1.toUpperCase() === str2.toUpperCase() )
    {
        return true;
    }
    else {
        return false;
    }

}
console.log(isSame('FaRmer', 'Farmer')) // Expected output: true
console.log(isSame('keyboard', 'mouse')) // Expected output: false
