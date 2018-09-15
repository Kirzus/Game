var btnOne = document.querySelector("#p1Btn");
var btnTwo = document.querySelector("#p2Btn");
var btnRes = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gamesDisplay = document.querySelector("#gamesDisplay");
var btnInput = document.querySelector("#gamesInput")
var p1 = {
    score: 0,
    victory: false
};
var p2 = {
    score: 0,
    victory: false
};
var winningScore = 5;
var gameOver = false;
gamesDisplay.textContent = winningScore;

btnOne.addEventListener("click", addPoints.bind(this,p1,p1Display));
btnTwo.addEventListener("click", addPoints.bind(this,p2,p2Display));
btnInput.addEventListener("change", function() {
    gamesDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset(p1,p1Display);
    reset(p2,p2Display);
});

btnRes.addEventListener("click", function() {
    reset(p1,p1Display);
    reset(p2,p2Display);
})
// Function that add score, add color to winning and disable input on game over
function addPoints(player,display) {
    if (gameOver !== true) {
        player.score++;
        if (player.score === winningScore) {
            player.victory = true;
            display.classList.add("victory");
            gameOver = true;
            btnInput.setAttribute("disabled","");
        }
    display.textContent = player.score;
    }
}

function reset(player,display) {
    player.score = 0;
    player.victory = 0;
    display.classList.remove("victory");
    display.textContent = player.score;
    btnInput.removeAttribute("disabled");
    gameOver = false;
}

