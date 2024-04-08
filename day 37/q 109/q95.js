"use strict";
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [5, 10, 15, 20, 25];
function greaterThenTen(numbers) {
    return numbers.filter((num) => num > 10);
}
console.log(greaterThenTen(numbers));
