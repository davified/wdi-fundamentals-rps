////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    //console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    } else if (playerMove === computerMove) {
        winner = "Nil. It's a tie";
    } else {
        winner = "computer";
    }
    console.log('Player: ' + playerMove + '\nComputer: ' + computerMove +
    '\nWinner: ' + winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        if (getWinner() === "player") {
            playerWins ++;
            console.log("The score is Player: " + playerWins + " and Computer: " + computerWins + ". \n");
        }
        else if (getWinner() === "computer") {
            computerWins ++;
            console.log("The score is Player: " + playerWins + " and Computer: " + computerWins + ".\n");
        }
        else {
            console.log("The score is Player: " + playerWins + " and Computer: " + computerWins + ".\n");
        }
    }
    return [playerWins, computerWins];
}


playToFive()

