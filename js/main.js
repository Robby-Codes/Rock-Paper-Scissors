// Getting the buttons and adding a click event to them.

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');

rockBtn.addEventListener('click', choseRock);
paperBtn.addEventListener('click', chosePaper);
scissorBtn.addEventListener('click', choseScissor);

// Getting the message that displays when you win, lose, or draw.
const message = document.getElementById('message');

// Getting the scores to change later.
let userScore = parseInt(document.getElementById('u-score').textContent);
let compScore = parseInt(document.getElementById('c-score').textContent);

// Randomly chooses either rock, paper, or scissor to fight the user.
function compMove () {
    var play = Math.floor(Math.random() * 3);
    if (play === 0) {
        return 'rock';
    } else if (play === 1) {
        return 'paper';
    } else if (play === 2) {
        return 'scissor';
    }
}

// Runs when the user picks rock. 
function choseRock () {
    var response = compMove();
    if (response === 'rock') {
        message.textContent = 'A Draw!';
    } else if (response === 'paper') {
        message.textContent = 'You Lost!';
        compScore += 1; 
        let newScore = compScore.toString();
        document.getElementById('c-score').textContent = newScore;
    } else if (response === 'scissor') {
        message.textContent = 'You Won!';
        userScore += 1;
        let newScore = userScore.toString();
        document.getElementById('u-score').textContent = newScore;
    }
}

// Runs when user picks paper.
function chosePaper () {
    var response = compMove();
    if (response === 'rock') {
        message.textContent = 'You Won!'
        userScore += 1;
        let newScore = userScore.toString();
        document.getElementById('u-score').textContent = newScore;
    } else if (response === 'paper') {
        message.textContent = 'A Draw!'
    } else if (response === 'scissor') {
        message.textContent = 'You Lost!'
        compScore += 1; 
        let newScore = compScore.toString();
        document.getElementById('c-score').textContent = newScore;
    }
}

// Runs when the user picks scissor.
function choseScissor () {
    var response = compMove();
    if (response === 'rock') {
        message.textContent = 'You Lost!'
        compScore += 1; 
        let newScore = compScore.toString();
        document.getElementById('c-score').textContent = newScore;
    } else if (response === 'paper') {
        message.textContent = 'You Won!'
        userScore += 1;
        let newScore = userScore.toString();
        document.getElementById('u-score').textContent = newScore;
    } else if (response === 'scissor') {
        message.textContent = 'A Draw!'
    }
}