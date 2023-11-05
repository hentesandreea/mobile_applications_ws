// Compute the distance between two points A and B.
function distanceBetweenPoints(Ax, Ay, Bx, By) {
 return Math.sqrt((Bx - Ax) * (Bx - Ax) + (By - Ay)* (By - Ay))

}
console.log(distanceBetweenPoints(4, 4, 1, 8)) // Expected output: 5
//nu exista ^2