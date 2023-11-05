// Given a dialog line, print it without the person’s name.
function printLineWithoutPerson(dialogLine) {
    let x =0;
    while(dialogLine[x] !== ":"){
        x ++;
    }
     console.log( dialogLine.substring(x + 1,dialogLine.length))

}
printLineWithoutPerson('Jericho: Wow! It\'s amazing!')
// Expected output: Wow! It's amazing!
