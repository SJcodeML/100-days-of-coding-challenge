"use strict";
// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript
Object.defineProperty(exports, "__esModule", { value: true });
// Example use of the 'await' reserved word in asynchronous JavaScript
// Example use of the 'await' reserved word in asynchronous JavaScript
async function fetchData() {
    // Assuming fetchSomething returns a Promise
    const data = await fetchSomething();
    console.log(data);
    // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
// This demonstrates how 'await' improves readability and flow in asynchronous code.
function fetchSomething() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation that resolves after a short delay
        setTimeout(() => {
            const data = "Data fetched successfully";
            resolve(data);
        }, 1000); // Resolves after 1 second (adjust as needed)
    });
}
