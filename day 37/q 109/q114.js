"use strict";
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
Object.defineProperty(exports, "__esModule", { value: true });
// Creates a Map to store student IDs (keys) and names (values)
const studentData = new Map();
studentData.set(1, "Muneeb");
studentData.set(2, "Sidra");
studentData.set(3, "Balaj");
console.log(studentData);
studentData.forEach((name, id) => {
    console.log(`student ID is ${id} , and name is ${name}`);
});
