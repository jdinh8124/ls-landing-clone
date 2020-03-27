$(document).ready(initalizeApp);

function initalizeApp() {
  $('.single-item').slick({
    arrows: true,
    accessibility: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1
  });
  backTop();
}


function backTop(){
  let btn = $('.back-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() < 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (event) {
    event.preventDefault();
    $('html').animate({ scrollTop: 0 }, '300');
  });


}


$('#button-expand').on('click', function(){
  if ($('#hidden-dept').hasClass('hidden')){
    $('#hidden-dept').removeClass('hidden');
    $('#button-expand').text('View Less')
    $("#dept").animate({height:'52vmin'}, 300);
    $(".button-grow").addClass('open-grow')
  }else{
    $('#hidden-dept').addClass('hidden');
    $('#button-expand').text('View More')
    $("#dept").animate({ height: '32vmin' }, 300);
    $(".button-grow").removeClass('open-grow')
  }
})
