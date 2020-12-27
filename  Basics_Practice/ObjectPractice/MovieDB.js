// Create an array of Movie objects
// Each movie onj has a title, rating, and hasWatched bool
let movieDB = [{
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozens",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 3.5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
]

function listMovieBD() {
    movieDB.forEach(function(ele) {
        if (ele.hasWatched)
            console.log("You have watched \"" + ele.title + "\" - " + ele.rating + " starts")
        else
            console.log("You have not watched \"" + ele.title + "\" - " + ele.rating + " starts")
    });
}