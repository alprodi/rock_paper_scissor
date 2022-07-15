//Declare the 3 possible choices as a constant
const choices = ["ROCK", "PAPER", "SCISSORS"]

//Create function getComputerChoice which will randomly return 'Rock', 'Paper', or 'Scissors.'
//Put 'Rock', 'Paper', and 'Scissors' into an array
//Get a random number (between 0 and 1? If so, mult by 3).
function getComputerChoice(){
    return(choices[Math.floor(Math.random() * 3)]);
}
//Create function that takes the playerSelection parameter (case-insensitive) and computerSelection parameter, 
function getPlayerChoice(){
    let playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
    let computerSelection = getComputerChoice();
    console.log(computerSelection + " is the computer selection");
}
//Return result via a string that declares the winner.


//After the above works:
//Write a new function called game(), calling the playRound function inside to play a 5 round game that keeps score and reports a winner or loser at the end.