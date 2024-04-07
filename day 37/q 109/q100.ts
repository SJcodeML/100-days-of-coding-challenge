// Finds the square root of 144




let squareRoot: number = Math.sqrt(144);

console.log(`square Root of 144 is ${squareRoot}`)

//I made the function:

function squareRootNumber(num:number):number{
    let root= Math.sqrt(num);
    let rounded =Number(root.toFixed(2));
    return rounded;

}


console.log(squareRootNumber(12));