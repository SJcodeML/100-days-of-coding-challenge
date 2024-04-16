"use strict";
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Nida",
    password: "123456",
    email: "dfksdjkj.com"
};
const jsonstring = JSON.stringify(person, null, 2);
console.log(jsonstring);
// In the code `JSON.stringify(person, null, 2)`, the `null` parameter is used as a placeholder for the `replacer` argument of the 
// `JSON.stringify()` function.
// The `replacer` argument is optional and allows you to control the behavior of the stringification process. It can be a function
//or an array that specifies which properties of the object should be included in the JSON string. By default, if the `replacer` 
//argument is not provided or is set to `null`, all properties of the object are included in the resulting JSON string.
// In this case, since `null` is passed as the `replacer`, it means that no special filtering or transformation of the object properties 
//is applied during the stringification process. All properties of the `person` object will be included in the resulting JSON string.
// The third argument `2` is used for indentation, indicating that the resulting JSON string should be formatted with 2 spaces for each 
//level of nesting. This makes the JSON string more readable when displayed to humans.
