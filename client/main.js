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


$('#button-expand').on('click', function(){
  if ($('#hidden-dept').hasClass('hidden')){
    $('#hidden-dept').removeClass('hidden');
    $('#button-expand').text('View Less')
    $("#dept").animate({height:'52vmin'}, 300);
  }else{
    $('#hidden-dept').addClass('hidden');
    $('#button-expand').text('View More')
    $("#dept").animate({ height: '32vmin' }, 300);  }
})
