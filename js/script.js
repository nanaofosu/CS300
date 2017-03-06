$(document).ready(function () {
    
    $('.tablet ul').hide("slide", { direction: "left" }, 1000);

    $("#burger").click(function () {

       // $('.tablet ul').animate({width:'toggle'},350);
        $('.tablet ul').stop().slideToggle('200');
    });
});