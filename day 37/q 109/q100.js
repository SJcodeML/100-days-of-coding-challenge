"use strict";
// Finds the square root of 144
Object.defineProperty(exports, "__esModule", { value: true });
let squareRoot = Math.sqrt(144);
console.log(`square Root of 144 is ${squareRoot}`);
//I made the function:
function squareRootNumber(num) {
    let root = Math.sqrt(num);
    let rounded = Number(root.toFixed(2));
    return rounded;
}
console.log(squareRootNumber(12));
