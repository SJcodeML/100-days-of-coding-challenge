"use strict";
// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
Object.defineProperty(exports, "__esModule", { value: true });
//meaning of asynchronous not existing or occurring at the same time.
// A callback function is a function that is passed as an argument to another function and is invoked inside that function. 
// It allows you to define behavior that will be executed at a later time, often asynchronously. Callback functions are commonly used 
// in JavaScript for handling asynchronous operations such as timers, event handling, and AJAX requests.
// function myFunction(arg1, arg2, callback) {
// Perform some operations
// Invoke the callback function
//   callback(result);
// }
// // Define the callback function
// function callbackFunction(result) {
//   // Handle the result
// }
// // Call the function and pass the callback function as an argument
// myFunction(value1, value2, callbackFunction);
// Callbacks are essential for handling asynchronous tasks in JavaScript, allowing for non-blocking behavior and improved code readability.
// Creates a Promise that resolves with "Hello, World!" after 2 seconds
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
helloPromise.then((message) => console.log(message));
// After 2 seconds, "Hello, World!" will be logged to the console. 
