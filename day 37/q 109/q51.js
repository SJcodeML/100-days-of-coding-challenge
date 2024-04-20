"use strict";
// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow 
// function.
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(width, height) {
    return width * height;
}
//Refactoring into arrow function:
let calculateAreaArrow = (width, height) => width * height;
calculateAreaArrow(5, 7);
