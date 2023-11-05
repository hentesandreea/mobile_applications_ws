// Transform an array of arrays of keys and values to an object.
function transformToObject(arr) {
const person = {
     age: arr[0][1],
    name:arr[1][1],
    city: arr[2][1]
}
return person
}
console.log(transformToObject([
    ['age', 25],
    ['name', 'William'],
    ['city', 'Bucharest']
]))
/* Expected output:
{
  age: 17,
  name: 'William',
  city: 'Bucharest'
}
*/
