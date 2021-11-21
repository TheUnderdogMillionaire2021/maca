$(document).ready(function(){
    $(".form").submit(function(event){
        event.preventDefault();

        setTimeout(function(){
            window.location.replace("/maca/salespage");
        }, 3000);
    });

    $("#logo").click(function(){
        window.location.replace("/maca/");
    });
});