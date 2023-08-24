function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];

    var randomChoice = Math.floor(Math.random()*options.length)

    return(options[randomChoice]);
}

function playRound(playerSelection,computerSelection){
    let outcomes = ['you win!', 'you lose :(', 'It\'s a draw :)']

    if(playerSelection == computerSelection){
        return {
            display: outcomes[2],
            outcome: "draw"
        };
    }
    else if((playerSelection == "rock" && computerSelection == "scissors")||(playerSelection == "paper" && computerSelection == "rock")||(playerSelection == "scissors" && computerSelection == "paper"))
        return {
            display: `${outcomes[0]} ${playerSelection} beats ${computerSelection}`,
            outcome: "win"
        }

    else if((playerSelection == "rock" && computerSelection == "paper")||(playerSelection == "paper" && computerSelection == "scissors")||(playerSelection == "scissors" && computerSelection == "rock"))
        return {
            display:`${outcomes[1]} ${computerSelection} beats ${playerSelection}`,
            outcome: "lose"
        }
}

function game(e){
    let playerSelection = e.target.id; 
    console.log(playerSelection)
    let computerSelection = getComputerChoice(); 

    let results = playRound(playerSelection,computerSelection);

    let displayResults = document.getElementById("results");
    
    if (results.outcome == "win")
        player1Score++; 
    if(results.outcome == "lose")
        player2Score++;

    displayEnd.style.display = "none"; 
    displayRule.style.display = "block";
    displayResults.style.visibility = "visible";

    displayResults.innerText = results.display;
    displayPlayer2Score.innerHTML = `${player2Score} <span>/ 5</span>`;
    displayPlayer1Score.innerHTML = `${player1Score} <span>/ 5</span>`;

    console.log(results.outcome);
    console.log(player1Score);
    console.log(player2Score);

    if (player1Score >= 5 || player2Score >=5 ){
        gameEnd(); 
    }
};

function gameEnd(){
    displayEnd.style.display = "block";
    displayRule.style.display = "none";
    displayResults.style.visibility = "hidden";

    player1Score=0; 
    player2Score=0; 

    displayPlayer2Score.innerHTML = `${player2Score} <span>/ 5</span>`;
    displayPlayer1Score.innerHTML = `${player1Score} <span>/ 5</span>`;
}


let buttons = document.querySelectorAll(".player1 svg");
let resetBtn = document.querySelector("#resetBtn");
let player1Score = 0; 
let player2Score = 0; 
let displayEnd = document.getElementById("gameEnd");
let displayRule = document.getElementById("gameRule");
let displayResults = document.getElementById("results");
let displayPlayer1Score = document.getElementById("player1Score");
let displayPlayer2Score = document.getElementById("player2Score");    

buttons.forEach((button)=>{
    button.addEventListener('click', game);
});

resetBtn.addEventListener('click', gameEnd);

