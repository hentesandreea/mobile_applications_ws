// Someone tells you to check google.com to see if it is down in 5 seconds. It may or not be down.
// Print a message in either case.
let googleIsDown = false;
function printMessageIn5Seconds() {
    let googleIsDown = false;
    console.log('No, what are you tryin\' to do?')
    googleIsDown = true;
    console.log('Yes! How did you do that? :o');


}
setTimeout(printMessageIn5Seconds, 5000);
// Expected output: No, what are you tryin' to do? *after 5 seconds*
googleIsDown = true;
/*function variant2(){
    console.log('Yes! How did you do that? :o')
}
setTimeout(variant2,5000);*/
// Expected output: Yes! How did you do that? :o *after 5 seconds*
