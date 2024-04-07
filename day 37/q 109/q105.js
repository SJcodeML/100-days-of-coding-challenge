"use strict";
// This function simulates rolling a dice and returns a number between 1 and 6
Object.defineProperty(exports, "__esModule", { value: true });
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
