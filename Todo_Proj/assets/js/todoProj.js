// =============================================== Listeners ===========================================
// listener: item seletected => cross out and make gray
$("ul").on("click", "li", function() { // add listener on item that exists initally, then make it work when "li" called
    $(this).toggleClass("completed")
});

// listener: icon in span sleected => fade then remove item
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() { //  fadeOut the parent of this obj (including the obj)
        $(this).remove() // parent obj removed after fadeOut done
    })
    event.stopPropagation() // stops event bubbling
});

// listener: new input => add input to list and clear textbox
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) { // if key pressed is "enter"
        let todoText = $(this).val() // extract newly inputted todo text
            // add new li to ul
        $("ul").append("<li>" + todoText + " <span><i class='fas fa-trash-alt'></i></span></li>")

        // Clear text from input by setting it to ""
        $(this).val("")
    }
});

$(".fa-plus").click(function() {
    // Toggle fade in/out of new todo input
    $("input[type='text']").fadeToggle()
})










// =================================== Unoptimized code ===============================
/*   
// toggle if item was selected
    if ($(this).css("color") === "rgb(128, 128, 128)") { // need rgb cuz .css(color) returns rgb
        $(this).css({
            color: "black",
            textDecoration: "none" // remove cross-out
        });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through" // camel case textDec in js since - is for css
        });
    }
    
    
*/