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
    //Return result via a string that declares the winner.
    //Check if it's a tie
    if (playerSelection == computerSelection){
        console.log("You picked " + playerSelection + ", and the computer picked " + computerSelection + ".");
        console.log("It's a tie!")
    }
    //Check if player wins
    else if( 
        playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER")
            {
            console.log("You picked " + playerSelection + ", and the computer picked " + computerSelection + ".");
            console.log("You won! How rare.");
            }
    //Check if computer wins
    else if( 
        playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "ROCK")
            {
            console.log("You picked " + playerSelection + ", and the computer picked " + computerSelection + ".");
            console.log("You lost!");
            }
    //Check if the player didn't put in a valid choice
    else if(
        playerSelection != "ROCK" && 
        playerSelection != "SCISSORS" &&
        playerSelection != "PAPER")
            {
             console.log("You picked " + playerSelection + ", and the computer picked " + computerSelection + ".");
            console.log("You didn't input either Rock, Paper, or Scissors. Try again");
            }
    //Catch all other weird errors. This shouldn't be possible?!
    else{console.log("Something went terribly wrong to get this message.")};
}


//After the above works:
//Write a new function called game(), calling the playRound function inside to play a 5 round game that keeps score and reports a winner or loser at the end.