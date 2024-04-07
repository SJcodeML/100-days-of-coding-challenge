// This function simulates rolling a dice and returns a number between 1 and 6

function rollDice ():number {
    return Math.floor(Math.random() *6)+1;
}

console.log(rollDice());