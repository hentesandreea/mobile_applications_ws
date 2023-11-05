// Someone hacks and shuts down google.com. He tells you to see if it is down in 5 seconds. Print Yes! How did you do that? :o after 5 seconds.
function printMessageIn5Seconds(){
    console.log('Yes! How did you do that? :o')
}
setTimeout(printMessageIn5Seconds, 5000);
// Expected output: Yes! How did you do that? :o *after 5 seconds*
