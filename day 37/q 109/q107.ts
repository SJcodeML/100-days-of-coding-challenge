// This function checks if a number is divisible by both 2 and 3
function numberDivisible(dig:number):boolean{
    return dig % 2 === 0 && dig % 3 === 0;
}

console.log(numberDivisible(15));