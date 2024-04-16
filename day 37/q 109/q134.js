"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 134: Take a JSON string and parse it into a JavaScript object.
//defines a JSON string
const jsonstring = `{"name":"Sidra","password":"1234560","email":"ajjd.com"}`;
//parses the json string into js object
const person = JSON.parse(jsonstring);
console.log(person);
// above snippet shows how to take a json string and converts back into a JS object.
