$(document).ready(initalizeApp);

function initalizeApp() {
  $('.slick-slider').slick({
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 3,
    accessibility: true
  });
}
