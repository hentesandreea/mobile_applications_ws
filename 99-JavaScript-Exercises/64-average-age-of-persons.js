// Print out the average age of persons.
function printAverageAge(persons) {
let k = 0;
for(const person of persons)
{
    if(person.name)
    {
        k++;
    }
}
let sum = 0;

}
printAverageAge([
    { name: 'Michael', age: 29 },
    { name: 'Joe', age: 30 },
    { name: 'Diana', age: 30 }
])
// Expected output: 29.66
