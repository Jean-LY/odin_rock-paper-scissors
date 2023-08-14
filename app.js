function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];

    var randomChoice = Math.floor(Math.random()*options.length)

    return(options[randomChoice]);
}

function playRound(playerSelection, computerSelection){
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

// const playerInput = playerSelection.toLowerCase(); 

function game(){
    
    let playerScore = 0; 
    let computerScore = 0; 
    
    for (let game = 5; game > 0; game--){
        let playerInput = prompt();
        let playerSelection = playerInput.toLowerCase();  
        let computerSelection = getComputerChoice(); 

        let round = playRound(playerSelection,computerSelection);
        
        if (round.outcome == "win")
            playerScore++; 
        if(round.outcome == "lose")
            computerScore++;

        console.log(round.display); 
    }
}