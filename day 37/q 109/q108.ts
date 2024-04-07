// This function compares two strings, ignoring case sensitivity
function comparingTwoStrings(str1:string , str2:string):boolean{

    return str1.toLocaleLowerCase() === str2.toLowerCase();
}


console.log(comparingTwoStrings("hello" , "HELLO"));
console.log(comparingTwoStrings("hi" , "iess"));