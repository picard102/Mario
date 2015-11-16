 (function($) {
  $(function() {

//////////////////////
////////  Get Viewport width.
//////////////////////

  function viewport() {
      var e = window, a = 'inner';
      if (!('innerWidth' in window )) {
          a = 'client';
          e = document.documentElement || document.body;
      }
      return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
  }



//////////////////////
////////  Mobile Movements
//////////////////////


function mobileMoves() {
  var vpWidth = viewport().width;

  if (vpWidth > 800) {
     $('.hamburger').bigSlide({ side: 'right',  push: ('.push')});
  } else {
     $('.hamburger').bigSlide({ side: 'right', push: ('.pushm')});
  }

}

$(window).on('load', function() { 
    mobileMoves();
});


// Video Background
//
//

coverVid(document.querySelector('.video-container video'), 640, 360);


// Slide Menu
//
//




  $(document).ready(function() {
     
  });


// Scroll to Sales
//
//

  $(".hero-unit .red-box").click(function() {
    $('html, body').animate({scrollTop: $('.sales').offset().top});
    event.preventDefault();

    $("<audio></audio>").attr({ 
      'src':'audio/smb3_pipe.wav', 
      'autoplay':'autoplay'
    }).appendTo("body");



  });


// Lightbox
//
//

  $(document).ready(function() {
    $('.image-frame').magnificPopup({type:'image',   gallery:{
      enabled:true
    }});
  });



// Coin Box Sounds
//
//

$('.coin-box').click(function(){
  
$("<audio></audio>").attr({ 
      'src':'audio/smb3_coin.wav', 
      'autoplay':'autoplay'
    }).appendTo("body");
 
});


// Coin Box Sounds
//
//

$('.empty-box').click(function(){
  
$("<audio></audio>").attr({ 
      'src':'audio/smb3_bump.wav', 
      'autoplay':'autoplay'
    }).appendTo("body");
 
});



  });
})(jQuery);  