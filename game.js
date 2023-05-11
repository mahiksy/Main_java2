let userScore = 0;
let pcScore = 0;
let userChoice = "";
let ListID = ["1","2","3"];
let actions = ["rock","paper","scissors"];
const options = document.querySelectorAll(".game-board-buttons");
const computerAction = document.querySelector(".computer-action");
const controlB = document.querySelectorAll(".control-button");
const scores = document.querySelector("#score");
const resultText = document.querySelector("#result");
controlB[1].style.display = "none";
controlB[2].style.display = "none";

let getUserChoice = function(op){
    userChoice = op;
}

function game(){
    let pc = computerGame();
    computerAction.setAttribute('id', actions[pc]);
    computerAction.style.display="block";
    controlB[1].style.display = "block";
    controlB[0].style.display = "none";
    resultText.textContent = playRound(userChoice,pc);
    if(pcScore == 5 || userScore == 5){
        controlB[1].style.display = "none";
        controlB[2].style.display = "block";
        resultText.textContent = checkWin();  
    }
    scores.textContent = `player: ${userScore} -------------------------------------- ${pcScore} :Computer`
}

let computerGame = function(){
    let randomNumber = Math.floor(Math.random() * (3));
    return randomNumber;
}

function playRound(useroption, computer){
    let msg;
    console.log(userChoice);
    console.log(actions[computer]);
    switch (true){
        case( useroption == actions[computer]):
            msg = `It's a tie!`;
            break;
        case (useroption == "rock" && actions[computer] == "scissors"):
            userScore++;
            msg = `You Scored. ${useroption} beats ${actions[computer]}!`;
            break;
        case (useroption == "scissors" && actions[computer] == "paper"):
            userScore++;
            msg = `You Scored. ${useroption} beats ${actions[computer]}!`;
            break;
        case (useroption == "paper" && actions[computer] == "rock"):
            userScore++;
            msg = `You Scored. ${useroption} beats ${actions[computer]}!`;
            break;
        case (useroption == "scissors" && actions[computer] == "rock"):
            pcScore++;
            msg = `You Lost. ${actions[computer]} beats ${useroption}!`;
            break;
        case (useroption == "paper" && actions[computer] == "scissors"):
            pcScore++;
            msg = `You Lost. ${actions[computer]} beats ${useroption}!`;
            break;
        case (useroption == "rock" && actions[computer] == "paper"):
            pcScore++;
            msg = `You Lost. ${actions[computer]} beats ${useroption}!`;
            break;
    }
    return msg;
}


function checkWin(){
    if(userScore>pcScore){
        return "You Won! Congrats!";
    } 
    else{
        return "You Lost!";
    }
}

let refreshGame = function(){
    userScore = 0;
    pcScore = 0;
    computerAction.style.display = "none";
    controlB[2].style.display = "none";
    controlB[1].style.display = "none";
    controlB[0].style.display = "block";
    scores.textContent = `player: 0 -------------------------------------- 0 :Computer`;
    resultText.textContent = "Please choose one of the actions!";
}

//adding eventListenr to options
options.forEach((butt)=>{
    let attribute = butt.getAttribute('id');
    butt.addEventListener("click", ()=>{
        getUserChoice(attribute);
    });
});

//add event listenr to start,controlButtons[1],and refresh buttons
controlB[0].addEventListener('click', ()=>{
        if(userChoice != ""){
            game();
        }
    }   
);
controlB[1].addEventListener('click',(e)=>{
    controlB[1].style.display = "none";
    controlB[0].style.display = "block";
    userChoice = "";
    resultText.textContent = "Please choose one of the actions!"
    computerAction.style.display = "none";
});
controlB[2].addEventListener('click',()=>{
    refreshGame();
}); 






