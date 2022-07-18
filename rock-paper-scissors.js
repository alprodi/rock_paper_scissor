//Declare the 3 possible choices as a constant
const choices = ["ROCK", "PAPER", "SCISSORS"]
//Set default scores to 0.
let computerScore = 0;
let playerScore = 0;
//number of rounds to play
let numRounds = 5;
//Create function getComputerChoice which will 
//randomly return 'Rock', 'Paper', or 'Scissors.'
//Put 'Rock', 'Paper', and 'Scissors' into an array
//Get a random number (between 0 and 1? If so, mult by 3).
function getComputerChoice(){
    return(choices[Math.floor(Math.random() * 3)]);
}
function playRound(playerSelection){
   let computerSelection = getComputerChoice();
   //Check if it's a tie
    if (playerSelection == computerSelection){
        roundResults.textContent = ("You picked " + playerSelection +
                ", and the computer picked " + computerSelection + ".");
        roundResultsFollowup.textContent = ("It's a tie!")
    }
    //Check if player wins
    else if( 
        playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER")
            {
            roundResults.textContent = ("You picked " + playerSelection +
                    ", and the computer picked " + computerSelection + ".");
            roundResultsFollowup.textContent =("You won! How rare.");
            playerScore++;
            checkScore();
            }
    //Check if computer wins
    else if( 
        playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerSelection == "ROCK")
            {
            roundResults.textContent = ("You picked " + playerSelection +
                    ", and the computer picked " + computerSelection + ".");
            roundResultsFollowup.textContent =("You lost!");
            computerScore++;
            checkScore();
            }

}

//function to check the socre
function checkScore(){
    if(playerScore + computerScore == numRounds){
        endGame();
    }
        //if the game isn't over, then display the CURRENT score
    else{scoreCounter.textContent = ("The current score is PLAYER: " + playerScore +
            ". COMPUTER: " + computerScore + ".");
    }
}

//when the game ends, calculate the final score
//and display a replay button
function endGame(){
    //make buttons disappear
    roundButtons[0].style.display = 'none';
    roundButtons[1].style.display = 'none';
    roundButtons[2].style.display = 'none';
    //display restart button
    playAgain.style.display = 'inline';
    welcomeMessage.textContent = "";
    //display final score bolded
    scoreCounter.style.fontWeight = "900";
    roundResultsFollowup.style.fontWeight = "900";
    scoreCounter.textContent =("The final score is Player: " + playerScore +
            ". Computer: " + computerScore + ".");
    if (playerScore > computerScore){
        roundResultsFollowup.textContent =("You won the game!");}
    else if (playerScore < computerScore){
        roundResultsFollowup.textContent =("You lost the game!");}
    else if (playerScore == computerScore){
        roundResultsFollowup.textContent =("It's a tie!");}
    else {roundResultsFollowup.textContent =("This is an error message. Something went wrong, what did you do?")}  
}

//Restart the game
function restartGame(){
    //Reset scores
    playerScore = 0;
    computerScore = 0;
    roundButtons[0].style.display = 'inline';
    roundButtons[1].style.display = 'inline';
    roundButtons[2].style.display = 'inline';
    playAgain.style.display = 'none';
    //restart messsages to defaults
    scoreCounter.style.fontWeight = "normal";
    roundResultsFollowup.style.fontWeight = "normal";
    welcomeMessage.textContent = "Choose Your Selection";
    roundResults.textContent = "";
    roundResultsFollowup.textContent = "";
    scoreCounter.textContent = "";

}

//UI Area
const buttons = document.querySelectorAll('button');
const roundButtons = document.getElementsByClassName('roundButtons');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    //alert(button.id);
    playRound(button.id);
  });
});

const gameMessage = document.querySelector('#gameMessage');

let welcomeMessage = document.createElement('div');
welcomeMessage.classList.add('gameInfo');
welcomeMessage.textContent = "Choose Your Selection";
gameMessage.appendChild(welcomeMessage);

let roundResults = document.createElement('div');
roundResults.classList.add('gameInfo');
roundResults.textContent = "";
gameMessage.appendChild(roundResults);

let roundResultsFollowup = document.createElement('div');
roundResultsFollowup.classList.add('gameInfo');
roundResultsFollowup.textContent = "";
gameMessage.appendChild(roundResultsFollowup);

let  scoreCounter = document.createElement('div');
scoreCounter.classList.add('gameInfo');
scoreCounter.textContent = "";
gameMessage.appendChild(scoreCounter);

let playAgainContainer = document.createElement('div');
playAgainContainer.setAttribute('class', 'gameInfo');

let playAgain = document.createElement('button');
playAgain.setAttribute('id', 'restart');
playAgain.innerHTML = 'Play Again?';
playAgain.onclick = function(){restartGame();}
playAgain.style.display = 'none';
playAgainContainer.appendChild(playAgain);

gameMessage.appendChild(playAgainContainer);