var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("display");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setupModeButtons();
    // reset button listener
    resetButton.addEventListener("click", function () {
        reset();
    });
    setupSquaresListeners();
    reset();
}

function setupSquaresListeners() {
    for (var i = 0; i < squares.length; i++) {
        //add click event to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to clicked square
            if (clickedColor === pickedColor) {
                //if colors match then
                message.textContent = "Correct!!";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
                //if colors don't match then
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try again";
            }
        });
    }
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset()
        });
    };
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function rgbNumber() {
    var random = Math.floor(Math.random() * 256);
    return random;
}

function randomColor(){
    var color = "rgb(" + rgbNumber() + ", " + rgbNumber() + ", " + rgbNumber() + ")";
    return color;
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //generate num random colors to array
    for(i = 0; i < num; i++){
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function reset() {
    //Generate all new colors
    colors = generateRandomColors(numSquares);
    //Pick a all new random picked color
    pickedColor = pickColor();
    //Change colorDisplay to new color
    colorDisplay.textContent = pickedColor;
    //Reset Header background color
    h1.style.backgroundColor = "steelblue";
    //reset button text
    resetButton.textContent = "New Colors";
    //reset message box
    message.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steeleblue";
}