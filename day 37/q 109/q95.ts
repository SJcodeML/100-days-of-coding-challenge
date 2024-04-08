// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.


const numbers:number[]=[5 , 10, 15 , 20, 25];

function greaterThenTen(numbers:number[]):number[]{
    return numbers.filter((num)=> num>10);
}
   

console.log(greaterThenTen(numbers));

