$(function () {

  $('.menu__btn').on('click', function () {
    $('.header__list').slideToggle();
  });

  $('.slider').slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  });

  new WOW().init();

});