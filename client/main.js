$(document).ready(initalizeApp);

function initalizeApp() {
  $('.single-item').slick({
    arrows: true,
    accessibility: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });
}
