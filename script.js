
const OPTIONS = ["rock", "paper", "scissors"];

// This is the overall game function
function game() {

    // This returns the computer play
    function getComputerChoice() {
        let randomSelection = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
        return randomSelection;
    }

    // This returns the player's play
    function getPlayerChoice() {
        // Get the player's response and transform to lowercase
        let playerChoice = prompt("What's your play? ").toLowerCase();

        if (OPTIONS.includes(playerChoice)) {
            return playerChoice;
        } else {
            console.error("Wrong game option!!!");
        }

    }

    // This returns the current game round result
    function gameRound(playerSelection, computerSelection) {

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

    console.log(gameInfo);
    console.log(gameRound(pSelection, cSelection));
}

const PLAY_ROUND = 5;
let currentRound = 1;
let roundCompleted = false;

while (!(roundCompleted)) {
    for (currentRound; currentRound <= PLAY_ROUND; currentRound++) {
        if (currentRound == 5) {
            console.log("This is the Final round");
            roundCompleted = true;
        } else {
            console.log("This is round " + currentRound);
        }
        game();
    }
}