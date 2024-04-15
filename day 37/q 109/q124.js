"use strict";
// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
Object.defineProperty(exports, "__esModule", { value: true });
let ownName = {
    name: "Sidra",
    age: "27",
    getName: function () {
        return this.name;
    }
};
console.log(ownName.getName());
