function findShip(y, x, square) {
    if (gameBoard[y][x] == 2 || gameBoard[y][x] == 3) {
        alert("Du har redan skjutit här!");
    }
    else if (gameBoard[y][x] == 1) {

        gameBoard[y][x] = 2;
        countHits();
        scoreAdder();
        square.style.background = 'red';
        hitMessage("Hit: "+ hitCounter);
        scoreMessage("Score: " +score);
        
    }
    else {

        gameBoard[y][x] = 3;
        countGuesses();
        scoreReducer();
        square.style.background = 'green';
        missMessage("Miss: "+gusseCounter);
        scoreMessage("Score: " +score);
    }   
    return gameBoard;
}


 
	function hitMessage (msg) {
		var messageArea = document.getElementById("hitMessage");
		messageArea.innerHTML = msg;
	}
//view.hitMessage(msg);

function missMessage (msg) {
    var messageArea = document.getElementById("missMessage");
    messageArea.innerHTML = msg;
}

function scoreMessage (msg) {
    var messageArea = document.getElementById("scoreMessage");
    messageArea.innerHTML = msg;
}

//view.missMessage(msg);

function creatGameBoardContainer(row, col, gameBoardContainer) {
    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {


            let square = document.createElement("div");
            gameBoardContainer.appendChild(square);
            square.addEventListener("click", shootSebbe, false);
            square.style.background = 'black';
            square.id = 's' + j + i;

            var topPosition = j * squareSize;
            var leftPosition = i * squareSize;

            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';
        }
    }
}

function shootSebbe() {

    let id = $(this).attr('id');
    let y = id[1];
    let x = id[2];
    let square = $(this)[0];
    findShip(y, x, square);

    if (hitCounter == 14) {
        alert("Grattis, du vinner!");
    }
    else if (gusseCounter == 40) {
        alert("Du förlorar!!");
    }
}

function countHits() {
    hitCounter++;
    return hitCounter
}

function countGuesses() {
    gusseCounter++
    return gusseCounter;
}

function scoreAdder() {
    score+=1250
    return score
}

function scoreReducer() {
    score-=250
    return score
}

