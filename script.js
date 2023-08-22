
const OPTIONS = ["rock", "paper", "scissors"];

const PLAY_ROUND = 5;
let currentRound = 1;

function game() {
    function getComputerChoice() {
    let randomSelection = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    return randomSelection;
    }

    function getPlayerChoice() {
        let playerChoice = prompt("What's your play? ").toLowerCase();

        if (OPTIONS.includes(playerChoice)) {
            return playerChoice;
        } else {
            console.error("Wrong game option!!!");
        }

    }

    function gameRound(playerSelection, computerSelection) {
    
        console.log(gameInfo);

        if (playerSelection == "rock" && computerSelection == "scissors") {
            return "Player Wins.";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return "Player Wins.";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return "Player Wins.";
        } else if (playerSelection === computerSelection) {
            return "It's a draw."
        } else {
            return "You lose."
        }
    }

    let pSelection = getPlayerChoice();
    let cSelection = getComputerChoice();
    let gameInfo = `You played "${pSelection}" and the computer played "${cSelection}"`;
    console.log(gameRound(pSelection, cSelection));
}


let roundCompleted = false;

while (!(roundCompleted)) {
    for (currentRound; currentRound <= PLAY_ROUND; currentRound++) {
        if (currentRound == 5) {
            console.log("This is the Final round");
            game();
            roundCompleted = true;
        } else {
            console.log("This is round " + currentRound);
            game();
            
        }
    }
}