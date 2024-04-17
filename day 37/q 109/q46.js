"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "HP",
    model: "650G",
    year: "2022",
    describe: function () {
        console.log(`It is a ${laptop.make} laptop , it is ${laptop.model} model , purchased in ${laptop.year}`);
    },
};
laptop.describe();
