const prompt = require("prompt-sync")();
const name = prompt("whats your name? ");
console.log("Hello", name, "Welcome to Our Game!");

const shouldWePlay = prompt("Do you want to play? ");

const condition = shouldWePlay.toLowerCase() === "yes";
console.log(condition);


