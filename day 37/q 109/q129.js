"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
// Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
        //console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.
/// VERY IMPORTANT : I Had a confusion between q 126 and q 130 , in q126 this is applicable because it was nested function . but in q130 it
//is not nested with traditional function thats y arrow this is not workable with arrow function . 
//In contrast, arrowFunction is defined using an arrow function () => {}. Arrow functions do not have their own this context and instead 
// inherit this from the surrounding lexical scope when they are defined. Therefore, in the case of arrowFunction, this does not refer to the
//  traditionalVsArrow object but instead is determined by the scope in which traditionalVsArrow was defined, which may result in this.value
//   being undefined.
// Demonstrates 'this' behavior change in a nested function
// const myObject = {
//     property: "Value",
//     outerMethod: function () {
//       console.log(this.property); // Works as expected, logs "Value"
//       const innerMethod = () => {
//         console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
//       };
//       innerMethod();
//     },
//   };
//   myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
