// Given a name and an age, create a person object and add the field isOfLegalAge.
function getPerson(name, age) {
 let person ={
     name : name,
     age : age,
 }
  person.isOfLegalAge = person.age >= 18
    return person
}
console.log(getPerson('Iris', 18).isOfLegalAge) // Expected output: true
console.log(getPerson('Kara', 16).isOfLegalAge) // Expected output: false
