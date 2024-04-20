"use strict";
// Question 150: Describe how asynchronous callbacks differ from synchronous code execution
Object.defineProperty(exports, "__esModule", { value: true });
//solutin:
// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
// i < 1e9: This is the loop condition. It specifies that the loop should continue as long as the value of i is less than 1e9,
//  which is a shorthand notation for 1 * 10^9, meaning one billion.
// Execution Order:
// Synchronous: In synchronous code execution, statements are executed one after the other in sequential order. Each statement waits for the 
// previous one to finish before it begins.
// Asynchronous: Asynchronous code doesn't wait for tasks to complete before moving on to the next statement. Instead, it initiates tasks 
// and proceeds with execution without waiting for the tasks to finish. When the tasks complete, their associated callbacks are executed.
