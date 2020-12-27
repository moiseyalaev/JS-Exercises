const secretNum = 4; // set secret Number

let promptedNum = prompt("Guess a number!"); // Input is a string

promptedNum = Number(promptedNum); // Covert to num


if (promptedNum === secretNum) { // use === since we converted promptedNum to int 
    alert("You are right!Good guessing!");
} else if (promptedNum < secretNum) {
    alert("Guess higher!");

} else {
    alert("Guess lower!");
}