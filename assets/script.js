/*
    1) Start with a screen with 3 options
    1.1) have 3 buttons
    2) Get user input for which of the 3 options he'd like to play with
    2.1) Save it to a variable
    3) Algorithm for the machine to randomly choose one of the 3 options
    3.1) Set all the possibilities beforehand
    3.2) Check what the user pressed vs what the machine chose
    4) Show the user who won





    rock > scissors
    paper > rock
    scissors > paper

    

    if (inputFromUser == rock && inputFromMachine == scissors) {
        document.write(userWins)
    }
*/

//I'm not sure when I should be calling the function machineSelection(), but I'm positive it will do the job required

//Machine chooses a number and then 
// 1 = rock; 2 = paper; 3 = scissors
function machineSelection() {
    var machineChoice = Math.floor(Math.random() * 3) + 1;
    if (machineChoice == 1) {
        machineChoice = "rock";
    } else if (machineChoice == 2) {
        machineChoice = "paper";
    } else if (machineChoice == 3) {
        machineChoice = "scissors";
    } else {
        //if my math function is not correct, catch it and show it in the console log for testing
        console.log(machineChoice);
    }
}

//We save the user's option to a variable
// 1 = rock; 2 = paper; 3 = scissor
//Not needed anymore, as we'll validate each button individually?
//var userOption = document.getElementById(button);

//Function to catch the clicks?
//NOOOO, every button is a function that compares it to the computer's "choice"


//covers ties
/* Deprecated
if (machineOption == 1 && userOption == 1) {
    //tie
} else if (machineOption == 2 && userOption == 2) {
    //tie
} else if (machineOption == 3 && userOption == 3) {
    //tie
}
*/

//covers userRock
function userRock(){
    if (machineChoice == "rock") {
        //tie
    } else if (machineChoice == "scissors") {
        //user wins
    } else if (machineChoice == "paper") {
        //machine wins
    } else {
        //check what is happening if its not working
        console.log(userRock + machineChoice);
    }
}

//cover userScissors
function userScissors(){
    if (machineChoice == "scissors") {
        //tie
    } else if (machineChoice == "paper") {
        //user wins
    } else if (machineChoice == "rock") {
        //machine wins
    } else {
        //check what is happening if its not working
        console.log(userScissors + machineChoice);
    }
}

//cover userPaper
function userPaper(){
    if (machineChoice == "paper") {
        //tie
    } else if (machineChoice == "rock") {
        //user wins
    } else if (machineChoice == "scissors") {
        //machine wins
    } else {
        //check what is happening if its not working
        console.log(userPaper + machineChoice);
    }
}