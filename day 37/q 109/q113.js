"use strict";
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
Object.defineProperty(exports, "__esModule", { value: true });
const countries = new Map();
countries.set("USA", "Washington D.c");
countries.set("Pakistan", "Islamabad");
countries.set("Japan", "Tokyo");
console.log(countries);
function logCapital(countries) {
    if (countries.has("Canada")) {
        console.log(`the capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map");
    }
}
logCapital(countries);
