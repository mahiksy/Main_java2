let userScore = 0;
let pcScore = 0;
let userChoice = 0;
let ListID = ["1","2","3"];
let actions = ["rock","paper","scissors"];

let computerGame = function(){
    let randomNumber = Math.floor(Math.random() * (3));
    console.log(randomNumber);
    return randomNumber;
}

function playRound(useroption, computer){
    if(actions[useroption] === actions[computer]){
        return `It's a tigh!`
    }
    else if(actions[useroption] > actions[computer] && actions[useroption] != 3){
        userScore++;
        return `You Scored. ${actions[useroption]} beats ${actions[computer]}!`
    }
    else if (actions[useroption] == "scissors" && actions[computer] == "paper"){
        userScore++;
        return `You Scored. ${actions[useroption]} beats ${actions[computer]}!`
    }
    else if(actions[useroption] == "rock" && actions[computer] == "scissors"){
        userScore++;
        return  `You Scored. ${actions[useroption]} beats ${actions[computer]}!`
    }
    else{
        pcScore++;
        return  `You Lost. ${actions[computer]} beats ${actions[useroption]}!`
    }
}

function checkWin(){
    if(userScore>pcScore){
        return "You Won! Congrats!";
    } 
    else if(userScore==pcScore){
        return "It's tigh! Nice Try!";
    }
    else{
        return "You Lost!";
    }
}

function game(){
    let pc = computerGame();
    computerAction.setAttribute('id', actions[pc]);
    computerAction.style.display="block";
    let res = playRound(userChoice,pc);
    next.style.display = "block";
    start.style.display = "none";
    resultText.textContent = res;
    if(pcScore == 5 || userScore == 5){
        next.style.display = "none";
        refresh.style.display = "block";
        resultText.textContent = checkWin();  
    }
    scores.textContent = `player: ${userScore} -------------------------------------- ${pcScore} :Computer`
}

let getUserChoice = function(num){
    userChoice = num;
    console.log(userChoice);
}

let refreshGame =  function(){
    userScore = 0;
    pcScore = 0;
    computerAction.style.display = "none";
    refresh.style.display = "none";
    next.style.display = "none";
    start.style.display = "block";
    scores.textContent = `player: 0 -------------------------------------- 0 :Computer`;
    resultText.textContent = "Please choose one of the actions!";
}

//Creating Elements
const gameBoard = document.createElement("div");
const buttonBox = document.createElement("div");
const computerBox = document.createElement("div");
const resultBox = document.createElement("div");
const resultButtonBox = document.createElement("div");
const scoreBox = document.createElement("div");

//addin attributes
gameBoard.classList.add("game-board");
buttonBox.classList.add("button-box");
computerBox.classList.add("computer-box");
resultBox.classList.add("result-box");
resultButtonBox.classList.add("result-button-box");
scoreBox.classList.add("score-box");

//appending to the gameboard and body
document.body.appendChild(scoreBox);
gameBoard.append(buttonBox);
gameBoard.append(resultBox);
gameBoard.append(computerBox);
document.body.appendChild(gameBoard);

//create buttons for options
for(let i = 0;i<3;i++){
    const button = document.createElement("button");
    button.setAttribute('id',actions[i]);
    button.classList.add("game-board-buttons");
    button.addEventListener("click", getUserChoice(i));
    buttonBox.append(button);
}

//adding eventListenr to options
const options = document.querySelectorAll(".game-board-buttons");
options.forEach((butt)=>{
    let num = 0;
    let attribute = butt.getAttribute('id');
    console.log(butt);
    if(attribute == "rock"){ 
        num=0;
    }
    else if(attribute == ("paper")){
        num = 1;
    }
    else{
        num = 2;
    }
    butt.addEventListener("click", ()=>{
        getUserChoice(num);
    });
});

//creating computer action image
const computerAction = document.createElement("img");
computerAction.classList.add("computer-action");
computerBox.append(computerAction);

//adding result buttons and comment
const start = document.createElement("button");
const next = document.createElement("button");
const refresh = document.createElement("button");

//adding attributes to buttons
start.classList.add("control-button");
next.classList.add("control-button");
refresh.classList.add("control-button");
next.style.display = "none";
refresh.style.display = "none";
const resultText = document.createElement("p");

//add text content
start.textContent = "Start";
next.textContent = "Next";
refresh.textContent = "Refresh";
resultText.textContent = "Please choose one of the actions!";

//appending the buttons and text content inside result bottn box and result box
resultButtonBox.append(start);
resultButtonBox.append(next);
resultButtonBox.append(refresh);
resultBox.append(resultText)
resultBox.append(resultButtonBox);

//add event listenr to start,next,and refresh buttons
let controlB = document.querySelectorAll(".control-button");
controlB[0].addEventListener('click', ()=>{
            game();
        }   
);
controlB[1].addEventListener('click',(e)=>{
    next.style.display = "none";
    start.style.display = "block";
    resultText.textContent = "Please choose one of the actions!"
    computerAction.style.display = "none";
});
controlB[2].addEventListener('click',()=>{
    refreshGame();
}); 

//score content
const scores = document.createElement("p");
scores.textContent = `player: 0 -------------------------------------- 0 :Computer`;
scoreBox.append(scores);





