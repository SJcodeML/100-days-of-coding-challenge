// Question 127: Convert a traditional function expression to an arrow function.

function traditionalFunction (a:number , b:number){
    return a+b;
}

//const traditionalFunction = function(a,b){
//    return a=b;
//}


const arrowFunction= (a:number, b:number):number =>{
    return a+b;
}


//const arrowFunction = (a, b) => a + b;


console.log (traditionalFunction(5,300));
console.log(arrowFunction(6,5));