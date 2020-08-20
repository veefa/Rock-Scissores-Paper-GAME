//Varaibles
let rock = document.getElementById('human-rock')
let paper = document.getElementById('human-paper')
let scissors = document.getElementById('human-scissors')

const playButton = document.querySelector(".playButton");
const introScreen = document.querySelector(".game fadOut");

let humanScore = 0;
let computerScore = 0;
//Functions

const game = () => {
    
    function startGame ()  {};
    
    function getComputerChoice(computerChoice) {
        let randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            computerChoice = 'rock';
        } else if (randomNumber === 1) {
            computerChoice = 'scissors';
        } else if (randomNumber === 2) {
            computerChoice = 'paper';
        }
    };
    function match() { };
    function startRound() { };
    function gameOver() { };
    function isPlay() { 
        /*playButton.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        })*/
    };
    function isClick() { };
    function updateScore() { };

getComputerChoice();
}

game()

//onclick

document.getElementsByClassName('humhand-farme').addEventListener('click', event => {
    document.getElementsByClassName('hand-farme').style = 'width: 100%';
    document.getElementsByClassName('hand-farme').style = 'height: 100%';
});


