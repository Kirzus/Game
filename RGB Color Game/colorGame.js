var red = 0;
var green = 0;
var blue = 0;

var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

function randomColor(max) {
    var r = Math.floor(Math.random() * Math.floor(max));
    var g = Math.floor(Math.random() * Math.floor(max));
    var b = Math.floor(Math.random() * Math.floor(max));
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}

randomColor(255);