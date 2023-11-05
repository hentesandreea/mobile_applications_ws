// Check if a string is a valid possible name. A valid name contains only letters and spaces and needs to contain at least 3 letters.
function isValidName(name) {
    if(name.length <3 )
    {
        return false;
    }
    else {
        for(let i = 0 ; i <= 9 ; i++)
        {
            if(name.includes(i)){
                return false;
            }
        }
    }
    return true;

}
console.log(isValidName('Vl')) // Expected output: false
console.log(isValidName('Rebeque')) // Expected output: true
console.log(isValidName('Carol the 3rd')) // Expected output: false
