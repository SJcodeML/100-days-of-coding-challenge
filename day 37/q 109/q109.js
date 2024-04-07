"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentHour = new Date(); // representing current date and time 
if (currentHour.getHours() < 12) { // .getHours is fetching current time rom new date object
    console.log("Good Morning!");
}
// This simple check helps us greet users appropriately based on the time of day.
