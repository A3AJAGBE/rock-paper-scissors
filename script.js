// console.log("Welcome to A3 Game Application");

const OPTIONS = ["rock", "paper", "scissors"];

let randomSelection = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

// console.log(randomSelection);


function getComputerChoice() {
    return randomSelection;
}

getComputerChoice();

function getPlayerChoice() {
    let playerChoice = prompt("What's your play? ").toLowerCase();

    if (OPTIONS.includes(playerChoice)) {
        return playerChoice;
    } else {
        console.error("Wrong game option!!!");
    }

}

getPlayerChoice();