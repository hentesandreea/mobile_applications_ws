// Filter out expired products from an array.
function getNonExpiredProducts(products) {
    const currentDate = new Date();
    const nonExpiredPr = products.filter(product => {
        if (product.expiring)
        {
            const expiring = new Date(product.expiring);
            return expiring > currentDate;
        }
        return true;
    });

    return nonExpiredPr ;


}
const nonExpiredProducts = getNonExpiredProducts([
    { name: 'Honey', expiring: 'March 1, 2023' },
    { name: 'Juice Tea Me', expiring: 'August 1, 2028' },
    { name: 'Juicy J', expiring: 'August 1, 2028' }
])
nonExpiredProducts.forEach(({ name }) => console.log(name))
/* Expected output:
Juice Tea Me
Juicy J
*/
