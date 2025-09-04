
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
        //console.log("Computer chose Rock!")
        computerChoice.textContent = "rock 🪨";
        div.insertBefore(computerChoice, div.children[6])
        return "rock";
    } else if (comChoice == 2){
        comChoice = "Scissors"
        computerChoice.textContent  = "scissors ✂️ ";
        div.insertBefore(computerChoice, div.children[6])
        //console.log("Computer chose Scissors!")
        return "scissors"
    }else {
        comChoice = "Paper"
        computerChoice.textContent = "paper 📄";
        div.insertBefore(computerChoice, div.children[6])
        //console.log("Computer chose Paper!")
        return "paper"
    }

}

//DOM manipulation
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

//Add a Div Container
const div = document.querySelector("#container");
const heading1 = document.createElement("h1");
const subHeading =  document.createElement("h2")
const heading2 = document.createElement("h2");
const para = document.createElement("p");
const player = document.createElement("p")
const computerChoice = document.createElement("p");
const outcome = document.createElement("h2")
const winLoseDraw = document.createElement("p");
const score = document.createElement("h3");
const winner = document.createElement("p");

//Headings and Subtext
heading1.textContent = "Rock Paper Scissors vs Computer";
para.textContent = "Your Selection:";
subHeading.textContent = "You Selected:"
heading2.textContent = "Computer Choses:"
outcome.textContent = "Outcome:"
score.textContent = "Score:"

div.prepend(heading1);
div.insertBefore(para, div.children[1]);
div.insertBefore(subHeading, div.children[3]);
div.insertBefore(heading2, div.children[4]);
div.insertBefore(outcome, div.children[6])
div.insertBefore(score, div.children[7])
const content = document.querySelector("#content");


rockBtn.addEventListener("click", () => {
    // console.log("rock was clicked");
    player.textContent = "rock 🪨";
    div.insertBefore(player, div.children[4]);
    playRound("rock", getComputerChoice());
    
});
paperBtn.addEventListener("click", () => {
    // console.log("paper was clicked")
    player.textContent = "paper 📄";
    div.insertBefore(player, div.children[4]);
    playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
    // console.log("scissors was clicked")
    player.textContent = "scissors ✂️";
    div.insertBefore(player, div.children[4]);
    playRound("scissors", getComputerChoice());
});




function playRound(playerChoice, computerChoice){   
    
    
    if((playerChoice== "rock") && (computerChoice == "scissors")){
        winLoseDraw.textContent = "Win 🏆";
        div.insertBefore(winLoseDraw, div.children[8]);
        return "win";
        
    }  else if((playerChoice == "paper") && (computerChoice == "rock")){
        winLoseDraw.textContent = "Win 🏆";
        div.insertBefore(winLoseDraw, div.children[8]);
        return "win";

    }else if((playerChoice == "scissors") && (computerChoice == "paper")){
        winLoseDraw.textContent = "Win 🏆";
        div.insertBefore(winLoseDraw, div.children[8]);
        return "win";

    }else if(playerChoice == computerChoice){
        winLoseDraw.textContent = "Draw 🟰";
        div.insertBefore(winLoseDraw, div.children[8]);
        return "draw";

    }else{
        winLoseDraw.textContent = "Lose ❌";
        div.insertBefore(winLoseDraw, div.children[8]);
        return "lose";
    }
}


function playGame(){
    // getHumanChoice();
    // computerSelection = getComputerChoice();
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