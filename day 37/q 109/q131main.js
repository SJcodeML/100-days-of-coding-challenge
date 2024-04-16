"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q131_1 = require("./q131");
const alice = new q131_1.Person("Alice");
//const alice = new Person("Alice");: This line creates a new instance of the Person class with the name "Alice" and assigns it to the 
//variable alice. The new keyword is used to instantiate a new object based on the Person class.
// In another file:
//alice.greet();: This line calls the greet() method on the alice object, which is an instance of the Person class. This method likely 
//contains code to output a greeting message using the name of the person.
alice.greet();
