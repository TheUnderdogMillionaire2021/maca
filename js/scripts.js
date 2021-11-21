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

    $("#btn-whatsapp").click(function(){
        window.location.href = "https://wa.link/ga4hj5";
    });
});