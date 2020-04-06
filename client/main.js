$(document).ready(initalizeApp);

function initalizeApp() {
  $('.single-item').slick({
    arrows: true,
    accessibility: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1
  });
  $('#header-message-slide').slick({
    arrows: false,
    accessibility: true,
    speed: 900,
    autoplay: true,
    slidesToShow: 1
  });
  backTop();
  $("#introModalSubmit").on("submit", function(event){
    console.log('hello')
    event.preventDefault();
    $("#intro-modal").addClass("hidden")
  })
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
    $(".button-grow").addClass('open-grow')
    if(screen.width > 1800){
      $("#dept").animate({ height: '52vmin' }, 300);
    }else{
      $("#dept").animate({ height: '420px' }, 300);

    }
  }else{
    $('#hidden-dept').addClass('hidden');
    $('#button-expand').text('View More')
    $(".button-grow").removeClass('open-grow')
    if (screen.width > 1800) {
    $("#dept").animate({ height: '32vmin' }, 300);
    }else{
      $("#dept").animate({ height: '250px' }, 300);

    }
  }
})
