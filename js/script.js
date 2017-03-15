$(document).ready(function () {
    $('.tablet ul').hide("slide", {
        direction: "left"
    }, 1000);
    $("#burger").click(function () {
        // $('.tablet ul').animate({width:'toggle'},350);
        $('.tablet ul').stop().slideToggle('200');
        $(".main").fadeToggle("fast", "linear");
        $("footer").fadeToggle("fast", "linear");
        $("#special").fadeToggle("fast", "linear");
    });
});