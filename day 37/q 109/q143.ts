

// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

// Explanation: Requests a demonstration of handling Promise resolution and rejection using the `.then()` and `.catch()` methods in 
// JavaScript. Promises represent asynchronous operations' eventual completion or failure. The `.then()` method manages successful
//  resolutions, enabling sequential operations chaining, while the `.catch()` method handles Promise rejection, triggered by errors 
//  during execution. Chaining these methods allows concise and effective management of asynchronous operations, promoting clean code and 
//  error handling.
// Creates a Promise that either resolves or rejects based on a condition



  const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random()>0.5;//Randomly chooses success or failure
    if (success){
        resolve("success!");

    }else {
        reject(new Error("failure"));
    }
  });

  conditionalPromise
   .then((result) => console.log(result))//Handles a successful resolution
    .catch((error) => console.log(error.message));// Handles a rejection
//This code will randomly log either "success!" or "Failure based on the outcome of the promise . 