$(window).scroll(function () {
    if ($(document).scrollTop() > 1000) {
        $("header").addClass("animate");
    } else {
        $("header").removeClass("animate");
    }
});