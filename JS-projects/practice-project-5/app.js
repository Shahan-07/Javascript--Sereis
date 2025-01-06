const prompt = require("prompt-sync")();
const { isUtf8 } = require("buffer");
const fs = require("fs");

function loadQuestion(){
    try{
        const data = fs.readFileSync("questions.json","Utf8");
        const questions = JSON.parse(data).questions
        return questions;
    } catch(e){
        console.log("Error Occured Loading File", e);
        return[]
    }
}

function getRandomQuestions(questions,numQuestions){
    if(numQuestions > questions.length){
        numQuestions = questions.length
    }
    const shuffled = questions.sort(()=>{
        return 0.5 - Math.random()
    })
    return shuffled.slice(0,numQuestions);
}

function askQuestion(question){
    console.log(question.question);
    for(let i = 0; i < question.options.length; i++){
        const option = question.options[i];
        console.log(`${i + 1}. ${option}`);
    }
    const choice = parseInt(prompt("Enter the number: "));
    if(isNaN(choice)|| choice < 1 || choice > question.options.length){
        console.log("Invalid. incorrect choice");
        return false
    }
    const choiceValue = question.options[choice - 1];
    return choiceValue === question.answer;
}
const numQuestions = parseInt(prompt("Enter the number of question: "));
const questions = loadQuestion();
const RandomQuestions = getRandomQuestions(questions,numQuestions);

let correct = 0;
const startTime = Date.now();

for(let question of RandomQuestions){
    const isCorrect = askQuestion(question);
    console.log();
    
    if(isCorrect) correct++;
}

const totalTime = Date.now() - startTime
console.log("Correct: ", correct);
console.log("Time", Math.round(totalTime / 1000) + "s");
console.log("Score", Math.round((correct / numQuestions) * 100) + "%");







