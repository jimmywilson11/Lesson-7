document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(window).scroll(function () {
    if ($(document).scrollTop() > 1000) {
        $("header").addClass("animate");
    } else {
        $("header").removeClass("animate");
    }
});