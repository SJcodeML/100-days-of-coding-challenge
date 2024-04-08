"use strict";
// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each 
// that performs the same task, such as squaring a number.
Object.defineProperty(exports, "__esModule", { value: true });
// Function declaration for squaring a number
function squaringNumberDeclaration(num) {
    return num * num;
}
// Function Expression for squaring a number
let funExpression = function squaringNumberDeclaration(num) {
    return num * num;
};
console.log(squaringNumberDeclaration(6));
console.log(funExpression(3));
// Both methods give us the same result, showing two different ways to create functions that do the same thing.
