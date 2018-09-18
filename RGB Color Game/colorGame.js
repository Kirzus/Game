//Storing dom queries
var squares = document.querySelectorAll(".square");
var displayRgb = document.querySelector("#rgb");
var displayHeader = document.querySelector(".color");
var result = document.querySelector("#result");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var resetBtn = document.querySelector("#reset");
//Storing var for random correct color
var correctRgb;
//Player found correct color
var gameWin = false;

//App
function gameApp() {
    difficultyMode();
    event();
    reset();
}

function difficultyMode() {
}

function event() {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            //Grab color of clicked square
            var clickedColor = this.style.background;
            //Compare clicked color to the correct answer 
            if (clickedColor === correctRgb.style.background){
                allColorsDisplay();
                result.textContent = "Correct !";
                resetBtn.textContent = "Reset"; 
                gameWin = true;
            } else {
                this.removeAttribute("style");
                result.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    //Text Displays
    resetBtn.textContent = "New colors"; 
    displayHeader.style.background = "rgb(0, 132, 255)";
    //Set a random correct square
    var randomRgb = randomSquare(6);
    correctRgb = squares[randomRgb];
    for (i = 0; i < squares.length; i++) {
        randomColor();
        // squares[i].setAttribute("style", "background: " + rgb);
        squares[i].style.background = rgb;
        displayRgb.textContent = correctRgb.style.background;
        console.log(randomRgb); // DEBUG
    }
}
//Reset the game on clicking reset button
resetBtn.addEventListener("click", function() {
    reset();
})

//Randomize colors from 0 to 255 and return a rgb() string
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
}

//Display colors across all squares
function allColorsDisplay() {
    for (i = 0; i < squares.length; i++) {
        squares[i].classList.remove("hide");
        squares[i].setAttribute("style", "background: " + correctRgb.style.background);
        //Remove current header style
        displayHeader.setAttribute("style", "background: " + correctRgb.style.background);
    }
}

// Return random number
function randomSquare(num) {
    return Math.floor(Math.random() * num);
}

gameApp();