// $(document).ready(function() {
    //Storing color variables
    var rgb = "";
    //Storing dom queries
    var squares = document.querySelectorAll(".square");
    var displayRgb = document.querySelector("#rgb");
    // Randomize the square holding the correct color

    var randomRgb = Math.floor(Math.random() * Math.floor(6));
    var correctRgb = squares[randomRgb];

    console.log(randomRgb);

    // squares.forEach(function (element) {
    //     randomColor(255);
    //     element.style.background = rgb;
    // });

    for (i = 0; i <= squares.length; i++ ) {
        randomColor(255);
        // squares[i].setAttribute("style", rgb);
        squares[i].style.background = rgb;
    }

    function randomColor(max) {
        var red = Math.floor(Math.random() * Math.floor(max));
        var green = Math.floor(Math.random() * Math.floor(max));
        var blue = Math.floor(Math.random() * Math.floor(max));
        rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
        updateContent();
        return rgb;
    }

    function updateContent() {
        displayRgb.textContent = correctRgb.style.background;
    }

    function randomCorrect(number) {
        return Math.floor(Math.random() * Math.floor(number));
    }
// });