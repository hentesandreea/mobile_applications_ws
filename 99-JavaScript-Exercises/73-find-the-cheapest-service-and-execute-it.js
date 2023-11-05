// Given an array of companies that do a service, execute the cheapest one.
function executeTheCheapestService(companies) {
    /*   let compSmallprice = {}
       let min = 1000;
       companies.forEach(company => {
           if (company.service.price < min) {
               min = company.service.price
               compSmallprice = company;
           }

       })
       compSmallprice.service.do();
   }*/
    companies.sort((a, b) => a.service.price - b.service.price)[0].service.do();
}

executeTheCheapestService([{
    name: 'Nice Redecorations S.R.L.', service: {
        price: 25, do: () => console.log('Doing the service...')
    }
}, {
    name: 'RE Deco', service: {
        price: 14, do: () => console.log('Redecorating...')
    }
}]) // Expected output: Redecorating...
