'use strict';
{
    $(function() {
        // header__btn & menu
        $('.header__btn').on('click', function() {
            $('.nav').toggleClass('active');
        });

        $('.nav__header').on('click', function() {
            $('.nav').toggleClass('active');
        });

        $('.nav__header, .nav__item a').on('click', function() {
            $('.nav').removeClass('active');
        });
    });//jQuery
}