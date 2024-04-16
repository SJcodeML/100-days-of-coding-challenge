"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
//syntax of class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//class MyClass {
//     // Properties
//     private myProperty: string;
//     public anotherProperty: number;
//     // Constructor
//     constructor(prop1: string, prop2: number) {
//         this.myProperty = prop1;
//         this.anotherProperty = prop2;
//     }
//     // Methods
//     public myMethod(): void {
//         console.log("Hello from MyClass!");
//     }
// }
// in this example:
// We define a class MyClass.
// It has two properties: myProperty (private) and anotherProperty (public).
// The constructor initializes these properties.
// It has a method myMethod that prints a message.
// Access modifiers like private and public are used to control the visibility of properties and methods.
// Type annotations are used to specify the types of properties and function parameters. They are optional but provide type safety.
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`hello my name is ${this.name}`);
    }
}
exports.Person = Person;
