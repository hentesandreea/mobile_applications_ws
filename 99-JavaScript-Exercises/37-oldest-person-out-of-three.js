// Print out the name of the oldest person out of 3.
function printOldestPersonsName(pers1, pers2, pers3) {
    if(pers1.age > pers2.age)
    {
        console.log(pers1.name)
    }
    else {
        console.log(pers2.name)}

    if(pers1.age > pers3.age)
    {console.log(pers1.name)}
    else{
        console.log(pers3.name)
    }
    if(pers2.age > pers3.age)
    {
        console.log(pers2.name)
    }
    else
    {
        console.log(pers3.name)
    }

}
printOldestPersonsName(
    { name: 'Joanna', age: 57 },
    { name: 'Erika', age: 34 },
    { name: 'Cornel', age: 38 }
) // Expected output: Joanna
