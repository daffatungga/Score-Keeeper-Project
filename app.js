const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const BestOfWin= document.querySelector('#bestOf');
const text = document.querySelector('#textScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if (!isGameOver){
        p1Score += 1;
        if (p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('winner', 'border-success');
            p2Display.classList.add('loser', 'border-danger');
            text.innerText = `The Home Team Wins, CONGRATSS!!!`;
        } ;
        p1Display.textContent = p1Score;
    };
});

p2Button.addEventListener('click', function(){
    if (!isGameOver){
        p2Score += 1;
        if (p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('winner', 'border-success');
            p1Display.classList.add('loser', 'border-danger');
            text.innerText = `The Away Team Wins, CONGRATSS!!!`;
        } ;
        p2Display.textContent = p2Score;
    };
});

resetButton.addEventListener('click', reset);

BestOfWin.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser', 'border-success', 'border-danger');
    p2Display.classList.remove('winner', 'loser', 'border-success', 'border-danger');
    text.innerText = 'Use the button below to keep score!'
};

