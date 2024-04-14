"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
let i = ["beijing", "shewuang", "urban", "Pakisan", "India"];
const vowels = "aeiouAEIOU";
for (let char of i) {
    if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break;
    }
    console.log(char);
}
// let favMovies:string[]=["documentary","destiny of the world","being a human"];
// for (let movie of favMovies){
//     console.log(movie);
// }
