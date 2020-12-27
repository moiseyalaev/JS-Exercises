let age = prompt("what is your age?");

if (age < 18) {
    console.log("you cannot enter the venue");
} else if (age < 21) {
    console.log("You can enter but you cant drink");
} else {
    console.log("You can enter and drink")
}

if (age < 0) {
    console.log("input a real age!")
}
if (age === 21) {
    console.log("Happy 21st birthday");
}
if (age % 2 === 1) {
    console.log("Your age is odd!");
}
if (Math.sqrt(age) % 1 === 0) { // this works too: (age % Math.sqrt(age) === 0)
    console.log("Your age is a perfecet square!")
}