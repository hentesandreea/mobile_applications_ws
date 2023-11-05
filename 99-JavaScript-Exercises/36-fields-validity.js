// For each user field that is not valid, print out a message.
function printInvalidFields(user) {
    if(user.name.length < 3)
    {
        console.log('Name is not valid, it should have at least 3 characters. ')
    }
    if(user.email.endsWith('@gmail.com') === false ){
        console.log('E-Mail is not valid, it doesn\'t end with @gmail.com.')
    }
    if(user.gender !== 'male' || user.gender !== 'female')
    {
        console.log('Gender is not valid, it must be either male or female.')
    }

}
printInvalidFields({
    name: '',
    email: '',
    gender: '',
})
/* Expected output:
Name is not valid, it should have at least 3 characters.
E-Mail is not valid, it doesn't end with @gmail.com.
Gender is not valid, it must be either male or female.
*/
