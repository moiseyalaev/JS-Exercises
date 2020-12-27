// Select all buttons
let p1 = document.getElementById("p1"),
    p2 = document.getElementById("p2"),
    resetButton = document.querySelector("#reset");

// Get input for winning score and its display
let winInput = document.querySelector("input"),
    winDis = document.querySelector("p span"); // span inside a p

// Select score displays
let p1Dis = document.getElementsByTagName("span")[0],
    p2Dis = document.getElementsByTagName("span")[1];

// create score keepers
let p1Score = 0,
    p2Score = 0,
    winScore = 5,
    isGameOver = false;

// Update when p1 score clicked
p1.addEventListener("click", function() {
    if (!isGameOver) {
        p1Score++;
        p1Dis.textContent = p1Score;
        if (p1Score === winScore) {
            p1Dis.classList.add("winner");
            p2Dis.classList.add("loser");
            isGameOver = true;
        }

    }
});

// Update when p2 score clicked
p2.addEventListener("click", function() {
    if (!isGameOver) {
        p2Score++;
        p2Dis.textContent = p2Score;
        if (p2Score === winScore) {
            p2Dis.classList.add("winner");
            p1Dis.classList.add("loser");
            isGameOver = true;
        }

    }
});

// Define the reset game function
function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Dis.textContent = 0;
    p2Dis.textContent = 0;
    p1Dis.classList.remove("winner");
    p2Dis.classList.remove("winner");
    p1Dis.classList.remove("loser");
    p2Dis.classList.remove("loser");
    isGameOver = false;
}

// Update game when reset is clicked
resetButton.addEventListener("click", reset);

// Update game when winning score in changed
winInput.addEventListener("change", function() {
    winScore = Number(this.value);
    winDis.textContent = winScore;
    reset(); // reset because we would want a  new  game if winScore  changed

});