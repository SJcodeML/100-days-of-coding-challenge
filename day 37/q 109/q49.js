"use strict";
// Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each 
// hobby with a statement saying you enjoy that hobby.
Object.defineProperty(exports, "__esModule", { value: true });
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I love ${hobby}.`);
    });
}
logHobbies("reading", "writing", "coding");
