// start list with one entry... done outside of a timeout
// so instructions (HTML) can load in Chrome
var todos = ["Buy New Turtle", "car", "house", "cat", "tree", "book"];

// Timeout to give chrome time to load HTML
window.setTimeout(function () {

    // find out what user would like to do
    var input = prompt("What would you like to do?");

    // while the user hasn't chosen to quit run program loop
    while(input !== "quit"){
        // list all entries on individually numbered lines starting from 1
        if (input === "list") {
        listTodos();
        } 
        // add new entry to end of list and confirm
        else if(input === "new") {
        addTodo();
        }
        // delete an entry by number on the list
        else if(input === "delete") {
        deleteTodo()
        }
        input = prompt("What would you like to do?");
    }

    function deleteTodo() {
        var delItemNum = prompt("what's the number of the entry you would like to delete?");
        //Show error message if number to delete is less than 1
        if (delItemNum < 1) {
            alert("Sorry, no such listing.");
        }
        // Show error message if number to delete is More than number of entries
        else if (delItemNum > todos.length) {
            alert("Sorry, no such listing.");
        }
        // Delete the requested item and confirm in console
        else {
            todos.splice((delItemNum - 1), 1);
            console.log("Todo item deleted!");
        }
    }

    function addTodo() {
        var add = prompt("what would you like to add?");
        todos.push(add);
        console.log("Todo Item added!"); 
    }

    function listTodos() {
        console.log("***Your List***");
        for (var i = 0; i < todos.length; i++) {
            console.log((i + 1) + ": " + todos[i]);
        }
        console.log("***End***");
    }

    //if user chooses to quit then display goodbye message
    console.log("You have quit the app! Thank you for using");
}, 500);