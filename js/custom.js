$(document).ready(function () {
    $("#slider1").owlCarousel({
        loop: true,
        navigation: true,
        dots: false,
        autoplay: true,
        slideSpeed: 800,
        paginationSpeed: 800,
        items: 1
    });
});
//Notice Slider
$(function () {
    $('#notice-slider').owlCarousel({
        loop: true,
        nav:true,
        navigation: true,
        dots: false,
        autoplay: true,
        slideSpeed: 800,
        mouseDrag:false,
        paginationSpeed: 800,
        items: 1
    });
});
// Back To Top
//========================
$(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height()) {
        $("#backToTop").addClass('showit');
    } else {
        $("#backToTop").removeClass('showit');
    }

});
$("body, html").on("click", "#backToTop", function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});
