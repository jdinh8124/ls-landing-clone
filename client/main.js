$(document).ready(initalizeApp);

function initalizeApp() {
  $('.single-item').slick({
    arrows: true,
    dots: false,
    accessibility: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
}
