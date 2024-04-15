"use strict";
// Question 127: Convert a traditional function expression to an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
function traditionalFunction(a, b) {
    return a + b;
}
//const traditionalFunction = function(a,b){
//    return a=b;
//}
const arrowFunction = (a, b) => {
    return a + b;
};
//const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 300));
console.log(arrowFunction(6, 5));
