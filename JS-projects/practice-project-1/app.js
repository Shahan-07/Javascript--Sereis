const prompt = require("prompt-sync")();
const name = prompt("whats your name? ");
console.log("Hello", name, "Welcome to Our Game!");

const shouldWePlay = prompt("Do you want to play? ");

if(shouldWePlay.toLowerCase() === "yes"){
    // Game Logic
    const leftOrRight = prompt("You Enter a Maze, do you want to go left or right? ");
    if(leftOrRight === "left"){
        console.log("you go left and see a bridge");
        const cross = prompt("Do you want to cross the bridge? ").toLowerCase();

        if(cross === "yes" || cross === "y" || cross === "okay"){
            console.log("you crossed but the bridge was weak and broke and you fell. you losstt...");
        } else{
            console.log("Good choice you win");
        }
    } else{
        console.log("you go right and fall off a cliff...");
        
    }


} else if(shouldWePlay.toLowerCase() === "no"){
    console.log("Okay :(");
} else{
    console.log("Invalid input");
}

