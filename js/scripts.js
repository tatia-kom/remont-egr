$(document).ready(function() {

    $('.head__gifts-item').each(function (index) {
        setTimeout(function() {
            $('.head__gifts-item:nth-child('+(index + 1)+')').removeClass('head__gifts-item--hidden');
        }, (index+1) * 300);
    });

    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.header__mobile-menu').click(function(e) {
        e.preventDefault();
        $('.header__menu').toggleClass('header__menu--opened');
        if ($(window).scrollTop() == 0) {
            $('.top').toggleClass('top--menu_opened');
        }
    });

    $(window).scroll(function() {

        if ($(window).scrollTop() > 0) {
            $('.header').addClass('header--scrolling');
        }
        else {
            $('.header').removeClass('header--scrolling');
        }

        const wh = $(window).height();
        const elOffset = $('.price').offset().top;
        const startAnimPosition = elOffset - (wh - 100);
        if  ($(window).scrollTop() > startAnimPosition) {
            $('.price__flex').removeClass('price__flex--hidden');
        }
        else {
            $('.price__flex').addClass('price__flex--hidden');
        }
    });
});