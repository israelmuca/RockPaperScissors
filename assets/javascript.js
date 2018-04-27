/*
    PSEUDOCODE - Here for legacy reasons

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



//Declare all my variables outside of the functions
var machineChoice;
var tieScore = 0;
var userScore = 0;
var machineScore = 0;

/*Functions to keep score
Most surely there's a way to do it all on one function, will do it on 3 different functions for now
*/
function noOneScored() {
    tieScore+=1;
}

function userScored() {
    userScore+=1;
}

function machineScored(){
    machineScore+=1;
}

//Function to make the machine select an option randomly
function machineSelection() {
    machineChoice = Math.floor(Math.random() * 3) + 1;
    if (machineChoice == 1) {
        machineChoice = "rock";
    } else if (machineChoice == 2) {
        machineChoice = "paper";
    } else if (machineChoice == 3) {
        machineChoice = "scissors";
    } else {
        //Here for testing purposes if needed
        //console.log(machineChoice);
    }
}


/*Functions to save the possibilities
//Ideally they would receive both the user choice and the machine choice to show it.
To be worked at a later date */
function tie() {
    alert("This is a tie!")
    this.noOneScored();
    alert("The current score is: \n" + tieScore + " ties. \n" + userScore + " wins by the user. \n" + machineScore + " wins by the machine.")
}

function userWins() {
    alert("You won!")
    this.userScored();
    alert("The current score is: \n" + tieScore + " ties. \n" + userScore + " wins by the user. \n" + machineScore + " wins by the machine.")
}

function machineWins() {
    alert("The machine won!")
    this.machineScored();
    alert("The current score is: \n" + tieScore + " ties. \n" + userScore + " wins by the user. \n" + machineScore + " wins by the machine.")
}


//covers user choosing rock
function userRock(){
    this.machineSelection();
    if (machineChoice == "rock") {
        tie();
    } else if (machineChoice == "scissors") {
        userWins();
    } else if (machineChoice == "paper") {
        machineWins();
    } else {
        //Here for testing purposes if needed
        //console.log(machineChoice);
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
        //Here for testing purposes if needed
        //console.log(machineChoice);
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
        //Here for testing purposes if needed
        //console.log(machineChoice);
    }
}