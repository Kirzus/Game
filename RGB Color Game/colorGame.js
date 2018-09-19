//Storing dom queries
var squares = document.querySelectorAll(".square");
var displayRgb = document.querySelector("#rgb");
var displayHeader = document.querySelector("header");
var result = document.querySelector("#result");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var resetBtn = document.querySelector("#reset");
//Storing var for random correct color
var correctRgb;
//Player found correct color
var gameWin = false;
//Default difficulty x squares
var difficulty = 6; 

//App
function gameApp() {
    difficultyMode();
    event();
    reset(difficulty);
}
//Difficulty Mode 
function difficultyMode() {
    easyBtn.addEventListener("click", function() {
        //Set difficulty to 3 squares
        difficulty = 3;
        //Add hide class on 3 end/bottom squares 
        for (i = 3; i < 6; i++) {
            squares[i].classList.add("hide");
        }
        //Pass in difficulty level and reset 
        reset(difficulty);
    });
    hardBtn.addEventListener("click", function() {
        //Set difficulty to 3 squares
        difficulty = 6;
        //Remove hide class on hidden squares if any 
        for (i = 3; i < 6; i++) {
            squares[i].classList.remove("hide");
        }
        //Pass in difficulty level and reset 
        reset(difficulty);
    });
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
                result.style.color = "rgb(0, 102, 197)";
                resetBtn.textContent = "Reset ?"; 
                resetBtn.classList.add("grow");
                gameWin = true;
            } else {
                this.removeAttribute("style");
                result.textContent = "Try Again";
                result.style.color = "red";
            }
        });
    }
}

function reset(num) {
    //Text Displays
    result.textContent = "";
    resetBtn.textContent = "New colors"; 
    displayHeader.style.background = "rgb(0, 102, 197)";
    resetBtn.classList.remove("grow");
    //Add and remove hovered class styling depending on current difficulty
    if (difficulty === 6) {
        easyBtn.classList.remove("hovered");
        hardBtn.classList.add("hovered");
    } else if (difficulty === 3) {
        hardBtn.classList.remove("hovered");
        easyBtn.classList.add("hovered");
    }
    //Set a random correct square
    var randomRgb = randomSquare(num);
    correctRgb = squares[randomRgb];
    for (i = 0; i < num; i++) {
        randomColor();
        squares[i].style.background = rgb;
        displayRgb.textContent = correctRgb.style.background;
        console.log(randomRgb); // DEBUG
    }
}
//Reset the game on clicking reset button
resetBtn.addEventListener("click", function() {
    reset(difficulty);
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
    for (i = 0; i < difficulty; i++) {
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