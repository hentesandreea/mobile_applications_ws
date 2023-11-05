// Sum up the total price of products in a store using reduce.
function getTotalPriceOfStore(products) {
const sumOftotal = products.reduce((accumulator,prod) => prod.price , 0);
    console.log(sumOftotal)

}
console.log(getTotalPriceOfStore([
    { name: 'Mouse', price: 50, amount: 3 },
    { name: 'Keyboard', price: 120, amount: 5 },
    { name: 'Mousepad', price: 20, amount: 5 }
]))
// Expected output: 850
