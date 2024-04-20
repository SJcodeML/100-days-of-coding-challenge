"use strict";
// Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread 
// operator to combine these arrays into a single array sorted in ascending order, then log the result.
Object.defineProperty(exports, "__esModule", { value: true });
// let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);: This line combines the two arrays pricesSet1 and pricesSet2 
// using the spread operator (...) to merge their elements into a single array. Then, it sorts the combined array in ascending order using 
// the sort() method with a custom comparator function (a, b) => a - b. This function compares two elements a and b and returns a negative
//  number if a should come before b, a positive number if b should come before a, and 0 if they are equal.
let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
// If a is less than b, a - b will be negative, indicating that a should come before b.
// If a is greater than b, a - b will be positive, indicating that b should come before a.
// If a is equal to b, a - b will be 0, indicating that they are equal.
// So, this arrow function effectively sorts the array in ascending order. If you wanted to sort the array in descending order, 
// you could simply reverse the subtraction: (a, b) => b - a.
