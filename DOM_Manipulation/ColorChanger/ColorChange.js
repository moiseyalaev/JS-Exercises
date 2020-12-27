let button = document.querySelector("button");
let isPurple = false; // togger that keeps track of background color
/*
button.addEventListener("click", function() {
    if (isPurple)
        document.body.style.background = "white";
    else
        document.body.style.background = "purple";

    isPurple = !isPurple // updates toggler after the toggle has been made
})
*/

// A more efficent way of doing this is with the toggle() from .classList
button.addEventListener("click", function() {
    document.body.classList.toggle("purple")
})