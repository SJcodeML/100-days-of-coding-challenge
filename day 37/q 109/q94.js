"use strict";
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
Object.defineProperty(exports, "__esModule", { value: true });
// Defines an array with some words
let words = ["Hello", "Sebastian", "How are you?"];
let lengthOfWords = words.map((word) => {
    return word.length;
});
console.log(lengthOfWords); // it will count gap so make sure 
