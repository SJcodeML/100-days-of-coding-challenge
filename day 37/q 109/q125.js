"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
let rectangle = {
    lengh: 4.5,
    width: 5,
    calculateArea: function () {
        return this.lengh * this.width;
    }
};
console.log(rectangle.calculateArea());
