let liList = document.querySelectorAll("li");

// For all the li's in the li list we want to apply the eventListeners
for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener("mouseover", function() { //  mouseover =  Anytime mouse is over the obj
        this.classList.add("hoveredOver");
    });

    liList[i].addEventListener("mouseout", function() { // mouseout = when mouse is not over the obj
        this.classList.remove("hoveredOver");
    });

    //  when we click on a task add class indicating it is done
    liList[i].addEventListener("click", function() {
        this.classList.add("completedTask");
    });
}