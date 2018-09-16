var red = 0;
var green = 0;
var blue = 0;

var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
var squares = document.querySelectorAll(".square")

squares.forEach(function (element) {
    randomColor(255);
    element.style.background = rgb;
    // console.log(rgb);
    // element[index].style.background(rgb);
});

function randomColor(max) {
    red = Math.floor(Math.random() * Math.floor(max));
    green = Math.floor(Math.random() * Math.floor(max));
    blue = Math.floor(Math.random() * Math.floor(max));
    rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rgb;
}
