$(document).ready(initalizeApp);

function initalizeApp() {
  $('.single-item').slick({
    arrows: true,
    accessibility: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1
  });
}
