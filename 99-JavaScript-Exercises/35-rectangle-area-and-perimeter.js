// Given two points objects,
// print out the area and the perimeter of the rectangle formed by the two points.
function printRectAreaAndPerimeter(pointA, pointB) {
console.log((pointA.x + pointA.y) + (pointB.x * pointB.y))
    console.log(2 * pointA.x + 2 * pointA.y + 2 * pointB.x + 2 * pointB.y)


}
const A = { x: 0, y: 0 }
const B = { x : 2, y: 3 }
printRectAreaAndPerimeter(A, B)
/* Expected output:
Area is 6
Perimeter is 10
*/
