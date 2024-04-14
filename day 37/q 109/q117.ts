

// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.


function logSizeNum(sizeNum:number):void{
    switch(sizeNum){
        case 12:
        case 14:
        case 16:    
            console.log("Small");
            break;
            break;
        case 18:
        case 20:
            console.log("Medium");
            break;
        case 22:
        case 24:
            console.log("Large") ;  
            break;
        default:
            console.log("Invalid Size");
            break;         
                    

    }
}


logSizeNum(26);