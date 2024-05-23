$(document).ready(function(){
    $(".box").on("click", function(){
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red");
    });
});

/**
 * When we click on an element that has
 * a 'box' class, this event will be fired.
 */

