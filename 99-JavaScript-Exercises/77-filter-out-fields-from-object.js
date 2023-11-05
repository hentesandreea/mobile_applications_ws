// Filter out the specified fields from an object.
function getObjWithFilteredOutFields(obj, fields) {
    fields.forEach(field => {
        delete obj[field];
    })
    return obj;
}
console.log(getObjWithFilteredOutFields(
    { age: 28, name: 'Mihai', profession: 'Software Developer', salary: 10000 },
    ['age', 'name']
))
// Expected output: { profession: 'Software Developer', salary: 10000 }
