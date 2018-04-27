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

//Declare all my variables outside of the functions
var machineChoice;

function machineSelection() {
    machineChoice = Math.floor(Math.random() * 3) + 1;
    if (machineChoice == 1) {
        machineChoice = "rock";
    } else if (machineChoice == 2) {
        machineChoice = "paper";
    } else if (machineChoice == 3) {
        machineChoice = "scissors";
    } else {
        //if my math function is not correct, catch it and show it in the console log for testing
        //console.log(machineChoice);
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
//functions to save the possibilities
//Ideally they would receive both the user choice and the machine choice to show it? Don't know how to do it
function tie() {
    alert("This is a tie!")
    //I need a function to keep scores!
}

function userWins() {
    alert("You won!")
    //Same, needs a function for the scores!
}

function machineWins() {
    alert("The machine won!")
    //Function for keeping scores needed
}

//covers userRock
function userRock(){
    this.machineSelection();
    if (machineChoice == "rock") {
        tie();
    } else if (machineChoice == "scissors") {
        userWins();
    } else if (machineChoice == "paper") {
        machineWins();
    } else {
        //check what is happening if its not working
        //console.log(userRock + machineChoice);
        //NOT NEEDED ITS WORKING NOW AND THIS CONSOLE LOG ACTUALLY NEVER WORKED!!!
    }
}

//cover userScissors
function userScissors(){
    this.machineSelection();
    if (machineChoice == "scissors") {
        tie();
    } else if (machineChoice == "paper") {
        userWins();
    } else if (machineChoice == "rock") {
        machineWins();
    } else {
        //check what is happening if its not working
        //console.log(userScissors + machineChoice);
    }
}

//cover userPaper
function userPaper(){
    this.machineSelection();
    if (machineChoice == "paper") {
        tie();
    } else if (machineChoice == "rock") {
        userWins();
    } else if (machineChoice == "scissors") {
        machineWins();
    } else {
        //check what is happening if its not working
        //console.log(userPaper + machineChoice);
    }
}