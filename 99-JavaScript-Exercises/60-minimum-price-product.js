// Identify the product with the minimum price from an array of products.
function getProductWithMinPrice(products) {
    let min = products.price[0];
for(let i = 1; i < products.price; i++)
{
    if(products.price[i] < min)
    {
        min = products.price[i];
    }
}
 return products.name.price;
}
console.log(getProductWithMinPrice([
    { name: 'Mouse', price: 49 },
    { name: 'Keyboard', price: 119 },
    { name: 'Mousepad', price: 19 }
]))
// Expected output: { name: 'Mousepad', price: 19 }
