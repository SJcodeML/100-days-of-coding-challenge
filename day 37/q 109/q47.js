"use strict";
// Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use 
// array destructuring to assign the first and second laptops to variables. Then, log these variables.
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = [
    { make: "HP", model: "", year: "" },
    { make: "DELL", model: "", year: "" },
    { make: "", model: "", year: "" }
];
let [laptop1, laptop2] = laptop;
console.log(laptop1);
console.log(laptop2);
