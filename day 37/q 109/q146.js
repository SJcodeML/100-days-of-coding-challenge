"use strict";
// Question 146: Show an example of a callback function used to filter an array of numbers.
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//uses .filter() with a callback function to filter out numbers greater than 5
const filternumbers = numbers.filter((number) => number > 5);
console.log(filternumbers);
//The call back function here checks each number, and .filter() creates a new array with numbers that meet the criteria.
