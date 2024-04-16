// Question 133: Write a JavaScript object and convert it into a JSON string.

// The `JSON.stringify()` function converts a JavaScript object into a JSON string. Here's what happens in the given code:

// 1. `JSON.stringify(person)`: This line takes the `person` object, which is presumably an instance of a JavaScript class or a plain JavaScript object, and converts it into a JSON string representation.

// 2. The resulting `jsonString` variable contains the JSON string representation of the `person` object. This string can be used to transmit data over a network, store data in a file, or pass data between different parts of a program. It's a common format for exchanging data between a client and a server in web applications.

// For example, if `person` object has properties like `name`, `age`, and `email`, the resulting JSON string might look like this:

// ```json
// {
//   "name": "John Doe",
//   "age": 30,
//   "email": "john@example.com"
// }
// ```

// This string can then be sent to a server or stored in a file for later use.



const person={
    name:"Sidra",
    password:"123456",
    Email:"dkjfhdjf.com"
};


//converts the abject into a JSON string
const jsonstring= JSON.stringify(person);

console.log(jsonstring);
// Demonstrates converting an object to a JSON string, making it easy to store or transmit.