var p1ScoreCard = document.getElementById("p1-score");
var p2ScoreCard = document.getElementById("p2-score");
var winCard = document.getElementById("win-card");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

function reset() {
    p1Score = 0;
    p1ScoreCard.textContent = 0;
    p1ScoreCard.classList.remove("winner");
    p2Score = 0;
    p2ScoreCard.textContent = 0;
    p2ScoreCard.classList.remove("winner");
    gameOver = false;
}

p1Button.addEventListener("click", function () {
    if(!gameOver){
         p1Score++;
         if(p1Score === winningScore) {
            gameOver = true;
            p1ScoreCard.classList.add("winner");
        }
        p1ScoreCard.textContent = p1Score;  
    }
});

p2Button.addEventListener("click", function () {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            gameOver = true;
            p2ScoreCard.classList.add("winner");
        }
        p2ScoreCard.textContent = p2Score;
    }
});


resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function() {
    winCard.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});