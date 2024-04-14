// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

//The switch statement is used in this code because it provides a concise and efficient way to handle multiple cases based on the value 
// of a single expression (dayNumber in this case). Each case represents a specific value of dayNumber, and the corresponding code block is 
// executed when dayNumber matches that value. This approach is clearer and more readable than using multiple if statements for each possible 
// value of dayNumber. Additionally, the default case provides a fallback option to handle any unexpected or invalid values of dayNumber.
//  Overall, the switch statement makes the code more organized and easier to understand for handling different day numbers and their 
//  corresponding names.


function logOFWeeks(daynumber: number):void{
    switch(daynumber){
        case 1:
            console.log("Sunday");
            break;


        case 2 :  
             console.log("Moonday");
             break;
    
        case 3:
            console.log("Tuesday");
            break;
        case 4 :
            console.log("Wednesday");
            break;
        case 5 :
            console.log("Thursday");
            break;
        case 6 :
            console.log("Friday");
            break;
        case 7 :
            console.log("Saturday");
            break;
        default:
            console.log("Please enter valid number");
            break;                    

    }
}


logOFWeeks(4);