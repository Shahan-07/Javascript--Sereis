const prompt = require("prompt-sync")();
const target = Math.round(Math.random() * 100);

let guesses = 0;

while(true){
    guesses++;

    const guess = Number(prompt("Guess the number(0-100): "));
    if(guess > target){
        console.log("your guess is too high.");
        continue;
    } else if( guess < target){
        console.log("your guess is too low.");
        continue;
    } else{
        console.log("your guessed it!");
        break;
    }
}
console.log("you gueesed the number in", guesses,"tries!");

