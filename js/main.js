$(document).ready(function () {
  $(".product-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
  });
});
