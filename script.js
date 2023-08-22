// console.log("Welcome to A3 Game Application");

const OPTIONS = ["Rock", "Paper", "Scissors"];

let randomSelection = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

// console.log(randomSelection);


function getComputerChoice() {
    return randomSelection;
}

getComputerChoice();