const prompt = require("prompt-sync")();

function makeMove(turn, board){
    while(true){
        const row = parseInt(prompt("Enter row: "));
        const col = parseInt(prompt("Enter col: "));

        if(isNaN(row)|| row < 1 || row > 3){
            console.log("Invalid Row");
        } else if(isNaN(col) || col < 1 || col > 3){
            console.log("Invalid Coloumn");
        } else if(board[row - 1][col - 1] !== " "){
            console.log("Inavlid Position");
        }else{
            board[row -1][col -1] = turn;
            break
        }
    }
}

function printBoard(board){
    for(let i = 0; i < board.length; i++){
        const row = board[i];
        let rowString = "";
        for(let j= 0; j < row.length;j++){
            rowString += row[j];
            if(j !== row.length -1) rowString += " | ";
        }
        console.log(rowString);
        if(i !== board.length -1)console.log("------------");
    }
}
function checkWin(board,turn){
    const lines = [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]]
    ]
    for(let line of lines){
        
    }
}






const board = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
]

let turn = "X";
let turnCount = 0;

printBoard(board);
console.log();

while(turnCount < 9){
    console.log(turn,"Players turn.");
    makeMove(turn, board)
    printBoard(board);
    console.log();
    
    
    if(turn === "X") turn = "O"
    else turn = "X"
    turnCount++;
}