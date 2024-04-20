"use strict";
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
Object.defineProperty(exports, "__esModule", { value: true });
//This function accepts a callback function and invokes it with given arguments
function execute1(callback, arg1, arg2) {
    callback(arg1, arg2); // invokes the call back with the specified arguments
}
//Example callback funcion that adds two numbers 
const add1 = (a, b) => {
    console.log(a + b); //outputs the sum of a and b
};
execute1(add1, 5, 3); // outputs:8
//demontrates invoking a callback function with arguments to perform an addition. 
// To "invoke" a function means to call or execute that function.
