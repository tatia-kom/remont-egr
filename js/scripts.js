$(document).ready(function() {

    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.header__mobile-menu').click(function(e) {
        e.preventDefault();
        $('.header__menu').toggleClass('header__menu--opened');
    });
});