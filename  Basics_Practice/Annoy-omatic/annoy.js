/*
let answer = prompt("Are we there yet?");

while (answer !== "yeah" && answer !== "yes") {
    answer = prompt("Are we there yet!?");  // when you redeclare here the variable doesnt get used, so just change the var val
}

alert("YAY!!! Finally, gosh!");
*/

let answer = prompt("Are we there yet?");

while (answer.indexOf("yeah") === -1 && answer.indexOf("yes") === -1) { // so long as there is a yes somwhere in the input
    answer = prompt("Are we there yet!?");
}

alert("YAY!!! Finally, gosh!");