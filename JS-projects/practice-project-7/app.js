const prompt = require("prompt-sync")();

let win = 0;
let losses = 0;
let ties = 0;

while(true){
    const playerChoice = prompt("Enter rock,paper of Scissors (or q to quit): ");
    if(playerChoice === "q"){
        break;
    }
    if(playerChoice !== "rock" &&
        playerChoice !== "paper" &&
        playerChoice !== "scissors"){
            console.log("please enter a valid Choice");
            continue;
        }

        const choices = ["rock","paper","scissors"];
        const randoIndex = Math.round(Math.random()* 2);
        const computerChoice = choices[randoIndex];

        console.log("The computer choose:", computerChoice);
        if(playerChoice === computerChoice){
            console.log("Draw!");
            ties++
        } else if(
            (playerChoice === "paper" && computerChoice === "rock")||
            (playerChoice === "rock" && computerChoice === "scissors")||
            (playerChoice === "scissors" && computerChoice === "paper")
        ){
            console.log("Won!");
            win++;
        } else{
            console.log("Lost!");
            losses++;
        }
}


console.log("Wins:",win,"Losses:",losses,"Ties",ties);

