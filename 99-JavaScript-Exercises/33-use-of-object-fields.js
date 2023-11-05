// Given a dog breed object, output statistics about the breed.
function printSpecieStats(dogBreed) {
    console.log('The ' + dogBreed.name + ' is originary from ' + dogBreed.origin )
    console.log('He s of a ' + dogBreed.color + ' color')
    console.log('The usual lifespan ranges between ' + dogBreed.lifeSpan + ' years')

}
const dogBreed = {
    name: 'Boxer Dog',
    origin: 'Germany',
    color: 'brindle and white',
    lifeSpan: '9 - 15'

}
printSpecieStats(dogBreed)

/* Expected output:
The Boxer Dog is originary from Germany.
He's of a brindle and white color.
The usual lifespan ranges between 9 - 15 years.
*/
