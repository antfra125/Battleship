let gameBoard = [
    [0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let gameBoardContainer = document.getElementById("gameboard");
let score = 0; 
let hitCounter = 0;
let gusseCounter = 0;
let col = 10;
let row = 10;
let squareSize = 50;
creatGameBoardContainer(row, col, gameBoardContainer);
console.log(score);

$("#submitbutton").click(addScore);

function addScore(){
    createScore($("#name").val(), score);
}

// Denna startar vi först så att vi laddar in listan på personer
loadExampleList()

