"use strict";
// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property 
// to 2021. Show how to perform these operations.
Object.defineProperty(exports, "__esModule", { value: true });
const car = {
    make: "Toyota",
    model: "corolla",
    year: "2023",
};
// car.color = "black";
car.year = "2024";
console.log(car);
