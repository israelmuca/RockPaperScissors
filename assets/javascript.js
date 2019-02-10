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
var machineChoiceNum;
var machineChoiceWor;
var userChoiceWor;
var userName;
var machineName;
var tieScore = 0;
var userScore = 0;
var machineScore = 0;
var audioElement;
var audioPreference;

//Set user's preference for audio
/* audioElement = document.getElementById("myAudio");
audioPreference = confirm("Would you like some cool background music?");
if (audioPreference) {
    audioElement.play();
} else {
    audioElement.pause();
} */


//Get both the user and machine's name and push it to the HTML
var userName = prompt("What's your name?", "Write your name");
var machineName = prompt("Name the computer! Or leave the default name!", "Jedi Master Yoda");

document.getElementById("HumanName").innerHTML = "<h3>" + userName + "</h3>";
document.getElementById("ComputerName").innerHTML = "<h3>" + machineName + "</h3>";

//Function to make the machine select an option randomly
function machineSelection() {
    machineChoiceNum = Math.floor(Math.random() * 3) + 1;
    machineChoiceWor = "";
    if (machineChoiceNum == 1) {
        machineChoiceWor = "rock";
    } else if (machineChoiceNum == 2) {
        machineChoiceWor = "paper";
    } else if (machineChoiceNum == 3) {
        machineChoiceWor = "scissors";
    } else {
        //Here for testing purposes if needed
        //console.log(machineChoice);
    }
}

// - - USER SELECTION FUNCTIONS - -

//Function for when the user chooses rock
function userRock(){
    userChoiceWor = "rock";
    this.machineSelection();
    if (machineChoiceWor == "rock") {
        tie(userChoiceWor, machineChoiceWor);
    } else if (machineChoiceWor == "scissors") {
        userWins(userChoiceWor, machineChoiceWor);
    } else if (machineChoiceWor == "paper") {
        machineWins(userChoiceWor, machineChoiceWor);
    } else {
        //Here for testing purposes if needed
        //console.log(machineChoice);
    }
}

//Function for when the user chooses scissors
function userScissors(){
    userChoiceWor = "scissors";
    this.machineSelection();
    if (machineChoiceWor == "scissors") {
        tie(userChoiceWor, machineChoiceWor);
    } else if (machineChoiceWor == "paper") {
        userWins(userChoiceWor, machineChoiceWor);
    } else if (machineChoiceWor == "rock") {
        machineWins(userChoiceWor, machineChoiceWor);
    } else {
        //Here for testing purposes if needed
        //console.log(machineChoice);
    }
}

//Function for when the user chooses paper
function userPaper(){
    userChoiceWor = "paper";
    this.machineSelection();
    if (machineChoiceWor == "paper") {
        tie(userChoiceWor, machineChoiceWor);
    } else if (machineChoiceWor == "rock") {
        userWins(userChoiceWor, machineChoiceWor);
    } else if (machineChoiceWor == "scissors") {
        machineWins(userChoiceWor, machineChoiceWor);
    } else {
        //Here for testing purposes if needed
        //console.log(machineChoice);
    }
}

//Functions for each possibility, with alerts for the user
function tie(userChoiceWor, machineChoiceWor) {
    alert("You chose " + userChoiceWor + " and the machine chose " + machineChoiceWor + "\nSooo, this is a tie!")
    this.noOneScored();
}

function userWins(userChoiceWor, machineChoiceWor) {
    alert("You chose " + userChoiceWor + " and the machine chose " + machineChoiceWor + "\nSooo, you won!")
    this.userScored();
}

function machineWins(userChoiceWor, machineChoiceWor) {
    alert("You chose " + userChoiceWor + " and the machine chose " + machineChoiceWor + "\nSooo, the machine won!")
    this.machineScored();
}

/* Functions to keep score
Most surely there's a way to do it all in one function, will do it on 3 different functions for now */
function noOneScored() {
    tieScore+=1;
    document.getElementById("TiesScoreText").innerHTML = tieScore;
}

function userScored() {
    userScore+=1;
    document.getElementById("HumanScoreText").innerHTML = userScore;
}

function machineScored() {
    machineScore+=1;
    document.getElementById("ComputerScoreText").innerHTML = machineScore;
}