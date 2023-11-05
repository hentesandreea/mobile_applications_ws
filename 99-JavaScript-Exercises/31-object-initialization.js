// Given a name and an age, create a person object with those.

function getPerson(name, age) {
    let x =  {name:name, age:age}
    return x;
}
const person = getPerson('Ion', 25)
console.log(person.name) // Expected output: Vlad
console.log(person.age) // Expected output: 27

/*const person = { name:'Vlad', age:27};
console.log(person.name);
console.log(person.age);*/
