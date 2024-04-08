// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

// Defines an array with some words
let words:string[]=["Hello", "Sebastian", "How are you?"];

let lengthOfWords:number[]=words.map((word)=>{
    return  word.length;
})

console.log(lengthOfWords);// it will count gap so make sure 