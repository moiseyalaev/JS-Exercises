// ====================================== Var Declerations ======================================
//  define num of squares, array of colors, and the correct Color
let numSquares = 6;
let colors = [];
let correctColor;

// get all html objs to manipulate
let squares = document.querySelectorAll(".square")
let h1 = document.querySelector("h1")
let colorDis = document.getElementById("colorDis")
let messageDis = document.getElementById("message")
let resetBtn = document.getElementById("reset")
let easyBtn = document.getElementById("easy")
let hardBtn = document.getElementById("hard")
let modeBtns = document.getElementsByClassName("mode")

// ============================ Calling Functions and Event Listeners ==========================
init(); //  defines squares, mode, and misc

// Event for when the reset button clicked
resetBtn.addEventListener("click", reset)

// ======================================= Functions ===========================================
function init() {
    setupSquares();
    setupModeBtns();
    reset();
}
h1.te
    // Set up the mode button functionality 
function setupModeBtns() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            // Visual effect of button being selected
            modeBtns[0].classList.remove("selected")
            modeBtns[1].classList.remove("selected")
            this.classList.add("selected")

            // Keep track of numSquares dependant on mode
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6

            reset(); // Use reset to handle reset of set up 
        });
    }
}

// Logic for when squares are selected
function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor // get curretly selected color from square

            // logic for if correct color is selected or not
            if (clickedColor === correctColor) { // if correct color selected
                messageDis.textContent = "Correct!"
                resetBtn.textContent = "Play Again!"
                changeColors(correctColor) // all squares to correct color
                h1.style.backgroundColor = correctColor // header color change
            } else {
                messageDis.textContent = "Try Again!"
                this.style.backgroundColor = "#232323" // make wrong color "disappear" (same color as background)
            }
        });
    }
}

// Change all squares to the passed in color (the correct color)
function changeColors(color) {
    for (let i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = color
}

// Ascribe a random color from colors[] as the "correctColor"
function pickColor() {
    let randomNum = Math.floor(Math.random() * colors.length); // floor ( [0,6) ) = indices of array (correct range)
    return colors[randomNum]
}

// Create an array of random colors by calling helper function
function createRandomColors(arrSize) {
    let arr = []

    for (let i = 0; i < arrSize; i++)
        arr[i] = randomColor();

    return arr
}

// Helper function that returns a random color
function randomColor() { // generate a random color
    let r = Math.floor(Math.random() * 256) // pick red [0,255]
    let g = Math.floor(Math.random() * 256) // pick green [0,255]
    let b = Math.floor(Math.random() * 256) // pick blue [0,255]

    return "rgb(" + r + ", " + g + ", " + b + ")" // make sure spaces are  correct
}

function reset() {
    // create new colors[] (dependent on mode since we use numSquares)
    colors = createRandomColors(numSquares)

    // choose new correctColor and make display = new corectColor
    correctColor = pickColor()
    colorDis.textContent = correctColor

    // Reset button text, winning message = "" ,and reset h1 backgroundColor
    resetBtn.textContent = "New Color"
    messageDis.textContent = ""
    h1.style.backgroundColor = "steelblue"

    // change colors of squares 
    for (let i = 0; i < squares.length; i++) {
        // if there are colors in array index then make the squares those colors
        // but first make them visible (display=block) since last 3 squares could have display=none
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]

        } else {
            squares[i].style.display = "none" // else make the squares not display anything
        }
    }
}






/*  ======================================== REHASH CODE =========================================
*    too repetative: create reset()
*   create modeBtn[] so we dont need individual event listeners
*   create init() so no floating loops and event listeners necessary 

// Add event for when easy button clicked
easyBtn.addEventListener("click", function() {
    // Visual effect of button being selected
    this.classList.add("selected")
    hardBtn.classList.remove("selected")

    // Create new colors arr, correctColor, and display new color
    numSquares = 3
    colors = createRandomColors(numSquares)
    correctColor = pickColor()
    colorDis.textContent = correctColor

    // loop through all squares and update colors + remove display of last 3
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) // since we declared 3 ele. in colors, everything after is false
            squares[i].style.backgroundColor = colors[i]
        else
            squares[i].style.display = "none"
    }

})

// Add event for when hard button clicked
hardBtn.addEventListener("click", function() {
    // Visual effect of button being selected
    this.classList.add("selected")
    easyBtn.classList.remove("selected")

    // Create new colors arr, correctColor, and display new color
    numSquares = 6
    colors = createRandomColors(numSquares)
    correctColor = pickColor()
    colorDis.textContent = correctColor

    // loop through all squares and update colors + remove display of last 3
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = "block"
    }
})
*/