"use strict";
// Question 149: Explain the concept of the event loop in JavaScript with an example.
Object.defineProperty(exports, "__esModule", { value: true });
//solution:
console.log("start");
setTimeout(() => {
    console.log("callback executed"); // This gets queued to be executed by the event loop
}, 0);
console.log("end");
// Although the timeout is 0 , "callback executed" is logged after "End" due to the event loop.
