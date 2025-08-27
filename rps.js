
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    //Create the max variable along with min variable
    let minCeil = Math.ceil(1);
    let maxFloor = Math.floor(4);

    //Generate a random number between 1 and 3
    let comChoice = Math.floor(Math.random() * (maxFloor- minCeil) + minCeil);

    //Assign numbers into strings          
    if (comChoice == 3){
        comChoice = "Rock";
        console.log("Computer chose Rock!")
        return "rock";
    } else if (comChoice == 2){
        comChoice = "Scissors"
        console.log("Computer chose Scissors!")
        return "scissors"
    }else {
        comChoice = "Paper"
        console.log("Computer chose Paper!")
        return "paper"
    }

}

function getHumanChoice(){
    //Ask for user input
    let humanAnswer = prompt("Rock, Paper, Scissors");

    //Convert input into lowercase and output it
    switch(humanAnswer.toLowerCase()){
        case "paper":
            console.log("You chose paper");
            return "paper";
        case  "rock":
            console.log("You chose rock");
            return "rock";
        case  "scissors":
            console.log("You chose scissors");
            return"scissors";
        default:
            console.log("Invalid Input");
            return "invalid";
    }
}

function playRound(humanChoice, computerChoice){   
    //change this to undefined so when it resets the values
    if(humanSelection == undefined || computerChoice == undefined){
        //Reset the values
        humanChoice = humanSelection;
        computerChoice = computerSelection
    }else{
        humanSelection = humanChoice;
        computerSelection = computerChoice;
    }
    
    
    if((humanChoice == "rock") && (computerChoice == "scissors")){
        return "win";
        
    }  else if((humanChoice == "paper") && (computerChoice == "rock")){
        return "win";
    }else if((humanChoice == "scissors") && (computerChoice == "paper")){
        return "win";
    }else if(humanChoice == computerChoice){
        return "draw";
    }else{
        return "lose";
    }
}


function playGame(){
    humanSelection = getHumanChoice() ;
    computerSelection = getComputerChoice();
    let result = playRound();

        if(result == "win"){
            humanScore = humanScore + 1;
            console.log("You win");
            console.log("human score: " + humanScore);
            console.log("computer score: " + computerScore);
            console.log("");
            alert("You Won");
            

        }else if(result == "lose"){
            computerScore = computerScore + 1;
            console.log("You lose");
            console.log("human score: " + humanScore);
            console.log("computer score: " + computerScore);
            console.log("");
            alert("You Lost");
            

        }else{ 
            console.log("You drew");
            console.log("human score: " + humanScore);
            console.log("computer score: " + computerScore);
            console.log("");
            alert("You Drew");
        
        }     

}

const btn = document.querySelector('#btn');


btn.addEventListener('click', playRound);