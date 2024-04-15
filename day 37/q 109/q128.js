"use strict";
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
Object.defineProperty(exports, "__esModule", { value: true });
const multiplyMultipleNum = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyMultipleNum(3, 4, 6));
// numbers.reduce((total, number) => total * number, 1): Inside the function, it uses the reduce method on the numbers array. 
// This method iterates over each element of the array and accumulates a single result, in this case, the multiplication of all the numbers. 
// The initial value of the accumulator is set to 1.The arrow function (total, number) => total * number passed to reduce takes two arguments: 
// total, the current accumulated result, and number, the current element being processed. It multiplies the total by the number and returns 
// the result.Overall, the function computes the product of all the numbers passed as parameters.
