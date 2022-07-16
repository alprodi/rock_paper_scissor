//Declare the 3 possible choices as a constant
const choices = ["ROCK", "PAPER", "SCISSORS"]
//Set default scores to 0.
let computerScore = 0;
let playerScore = 0;
//Create function getComputerChoice which will 
//randomly return 'Rock', 'Paper', or 'Scissors.'
//Put 'Rock', 'Paper', and 'Scissors' into an array
//Get a random number (between 0 and 1? If so, mult by 3).
function getComputerChoice(){
    return(choices[Math.floor(Math.random() * 3)]);
}
//Create function that takes the playerSelection parameter (case-insensitive)
// and computerSelection parameter, 
function playRound(){
    let playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
    let computerSelection = getComputerChoice();
    //Return result via a string that declares the winner.
    //Check if it's a tie
    if (playerSelection == computerSelection){
        console.log("You picked " + playerSelection +
                ", and the computer picked " + computerSelection + ".");
        console.log("It's a tie!")
    }
    //Check if player wins
    else if( 
        playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER")
            {
            console.log("You picked " + playerSelection +
                    ", and the computer picked " + computerSelection + ".");
            console.log("You won! How rare.");
            console.log(playerScore++);
            }
    //Check if computer wins
    else if( 
        playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "ROCK")
            {
            console.log("You picked " + playerSelection +
                    ", and the computer picked " + computerSelection + ".");
            console.log("You lost!");
            console.log(computerScore++);
            }
    //Check if the player didn't put in a valid choice
    else if(
        playerSelection != "ROCK" && 
        playerSelection != "SCISSORS" &&
        playerSelection != "PAPER")
            {
            console.log("You picked " + playerSelection +
                    ", and the computer picked " + computerSelection + ".");
            console.log("You didn't input either Rock, Paper, or Scissors. Try again");
            }
    //Catch all other weird errors. This shouldn't be possible?!
    else{console.log("Something went terribly wrong to get this message.")};
    console.log ("The current score is PLAYER: " + playerScore +
            ". COMPUTER: " + computerScore + ".");
}

//Play the game
function game(){
    //Reset scores
    playerScore = 0;
    computerScore = 0;
    while ((playerScore + computerScore) <5) {
        playRound();
    }
//Calculate final score
    console.log("The final score is Player: " + playerScore +
            ". Computer: " + computerScore + ".");
    if (playerScore > computerScore){
        console.log("You won!");}
    else if (playerScore < computerScore){
        console.log("You lost!");}
    else if (playerScore == computerScore){
        console.log("It's a tie!");}
    else {console.log("This is an error message. Something went wrong, what did you do?")}
   
}
    
game();


//After the above works:
//Write a new function called game(), calling the playRound function inside to play a 5 round game that keeps score and reports a winner or loser at the end.