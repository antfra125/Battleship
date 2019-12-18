
var hitCounter = 0;
var gameBoard = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

/*
function wrongNumber(number){
    if (number <0 || number > 99 ){
        alert (number + " Wrong number! choose a number mellan 0 och 99");
    }
    
        else 
        alert (number + " Okej! you have choosed a right number")
        //hits();

    
     
}
let result = parseInt(wrongNumber(guessAnumber));  
*/
//let guessAnumber;


//let guessAnumber2 = Number(prompt ("Guess a number between 0 and 99"));
//let guessAnumber3 = Number(prompt ("Guess a number between 0 and 99"));


function counter() {
    hitCounter++;
    if (hitCounter == 3)
        guessAnumber = alert(" Waw! you won!");

}

let guessAnumber;
function hits(guessAnumber) {

    guessAnumber = Number(prompt("Guess a number between 0 and 99"));

    for (i = 0; i < gameBoard.length; i++) {

        if (guessAnumber === 12 || guessAnumber=== 13 || guessAnumber=== 14) {
            alert(" yess! " + guessAnumber + " is correct! ");

            gameBoard.splice(guessAnumber, 1, "X");

            console.table(gameBoard);
            counter();
            console.log("Hit countern blir " + hitCounter);
            guessAnumber = ("Guess again.")
        }

        else
            guessAnumber = Number(prompt("Wrong number, Try again"));
    }
    

}
hits(guessAnumber);




