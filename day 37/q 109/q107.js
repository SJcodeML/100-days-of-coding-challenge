"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This function checks if a number is divisible by both 2 and 3
function numberDivisible(dig) {
    return dig % 2 === 0 && dig % 3 === 0;
}
console.log(numberDivisible(15));
