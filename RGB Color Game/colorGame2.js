//Storing dom queries
var squares = document.querySelectorAll(".square");
var displayRgb = document.querySelector("#rgb");
var displayHeader = document.querySelector(".color");
var result = document.querySelector("#result");

// // var randomRgb = Math.floor(Math.random() * 6);
// // var correctRgb = squares[randomRgb];
// console.log(randomRgb);
var randomRgb = Math.floor(Math.random() * 6);
var correctRgb = squares[randomRgb];

var gameWin = false;

for (i = 0; i < squares.length; i++) {
    randomColor();
    // squares[i].setAttribute("style", "background: " + rgb);
    squares[i].style.background = rgb;
    displayRgb.textContent = correctRgb.style.background;
    console.log(randomRgb); // DEBUG
    squares[i].addEventListener("click", function () {
        if (this !== correctRgb){
            this.classList.add("hide");
            result.textContent = "Try Again"
        } else {
            result.textContent = "Correct !"
            reset();
        }
    });
}


function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset() {
    for (i = 0; i < squares.length; i++) {
        squares[i].classList.remove("hide");
        squares[i].setAttribute("style", "background: " + correctRgb.style.background);
        displayHeader.classList.remove("color");
        displayHeader.setAttribute("style", "background: " + correctRgb.style.background);
    }
}