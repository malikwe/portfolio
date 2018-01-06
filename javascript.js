$(window).scroll(function () {

    if ($(this).scrollTop() > 150) {
        $('.navn').fadeOut();
    } else {
        $('.navn').fadeIn();
    }
});
