// Check off specific todo when clicked
$("ul").on("click", "li", (function(){
    //if grey the black else other way
    $(this).toggleClass("completed");
}));

//click X to delete todo

$("ul").on("click", "span", (function(event)
{
    $(this).parent().fadeOut(500,function(){
        $(this).remove(); 
    });
    event.stopPropagation();
}));

$("input[type='text']").keypress(function(event){
     if(event.which === 13)
     {
        todotext = $(this).val(); // new input
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
     }
});

$(".fa-plus").click(function()
{
    $("input[type = 'text']").fadeToggle();
});