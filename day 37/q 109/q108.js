"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This function compares two strings, ignoring case sensitivity
function comparingTwoStrings(str1, str2) {
    return str1.toLocaleLowerCase() === str2.toLowerCase();
}
console.log(comparingTwoStrings("hello", "HELLO"));
console.log(comparingTwoStrings("hi", "iess"));
