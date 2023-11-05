// Count the products without a description.
function countDescriptionlessProducts(products) {
    const productsWithoutdescription = products.filter(el => !el.description)
    return productsWithoutdescription.length;
}
console.log(countDescriptionlessProducts([
    { name: 'Mouse', price: 49 },
    { name: 'Keyboard', price: 119, description: 'Easy to use keyboard.' },
    { name: 'Mousepad', price: 19 }
]))
// Expected output: 2
