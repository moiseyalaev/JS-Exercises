// 4 ways to select first <p>
let firstWay = document.getElementById("first");
let secondWay = document.querySelector("#first");
let thirdWay = document.querySelector(".special");
let fourthWay = document.querySelector("p");
let fifthWay = document.getElementsByClassName("special")[0]; // first ele of all .special
let sixthWay = document.querySelector("h1 + p"); // first p adj to h1