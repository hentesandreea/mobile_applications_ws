// Count down from ten, second by second.
let sec = 10
function countdown() {

    if(sec >= 0)
    {
      console.log(sec)
      sec --
    }
    else {
        console.log('Time is done')
        clearInterval(interval)
    }
}
const interval = setInterval(countdown, 1000);// ca sa nu mearga la infinit
countdown()

/* Expected output
10 *after 1 second*
 9 *after 1 second*
 8 ...
*/
