// Write a function that takes four functions and applies them all to a number in
// reverse order (the fourth function is applied first).
function applyFourReverse(fn1, fn2, fn3, fn4, nr) {
    let result = fn4(nr)
    result = fn3(result)
    result = fn2(result)
    result = fn1(result)
    return result;


}
console.log(applyFour(
    w => w + 2,
    k => k * 3,
    n => n / 4,
    d => d - 2,
    10
)) // Expected output: 8
