// Chrome doesnt display html until alert, prompt, and confirm function popups are closed
// Thus wrap JS in setTimeout() which doesnt trigger JS until 500ms
// This is not necessary when you use $('document').ready() from JQuery
window.setTimeout(function() {
    const todos = [];
    let input = prompt("what would you like to do");

    while (input !== "quit") {
        if (input === "new")
            newTodos();

        if (input === "list")
            listToDos();

        if (input === "delete")
            deleteToDos();

        input = prompt("what would you like to do");
    }
    console.log("You have quite the app");

    function newTodos() {
        let newEle = prompt("What would you like to add to list?");
        todos.push(newEle);
        console.log("Added ToDo");
    }

    function listToDos() {
        console.log("=============");
        todos.forEach(function(ele, i) { // arr.function (element, index, arr)
            console.log(i + ": " + ele);
        });
        console.log("=============");
    }

    function deleteToDos() {
        let delIndex = prompt("What index of todo do you want to delete?");
        todos.splice(delIndex, 1); // deletes 1 element from array at delIndex (so only item at delIndex)
        console.log("Deleted ToDo");
    }

}, 500);