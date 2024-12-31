const prompt = require("prompt-Sync")();

const number1 = parseFloat(prompt("Enter number 1: "));
const number2 = parseFloat(prompt("Enter number 2: "));
const operator = prompt("Enter Sign: ");

let result;
switch(operator){
    case "+":
        result = number1 + number2;
        console.log(result);
        break;

        case "-":
            result = number1 - number2;
            console.log(result);
            break;

        case "*":
            result = number1 * number2;
            console.log(result);
            break;

        case "/":
            result = number1 / number2;
            console.log(result);
            break;
            
        
}