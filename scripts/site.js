$(document).ready(function() {

  // center content within sections
  $(window).resize(function() {

  if ($(window).width() >= 480) {
      $('.section').each(function(){
        var parent = $(this);
        var child = $(this).find('.content-middle');
        var topMargin = ((parent.height() - child.height()) / 2);

        child.css('margin-top', topMargin);
      });
  } else {

  }

  });



  // scrolling nav
  $('.nav').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {
          //I get fired when the animation is starting
      },
      end: function() {
          //I get fired when the animation is ending
      },
      scrollChange: function($currentListItem) {
      }
  });


  // scroll to next section
  $('.next-section').click(function() {
    $('html, body').animate({
    scrollTop: $("#section-2").offset().top
  }, 500);
  });


  // adjust some things based on the current section
  // fix nav between sections 2 and 6
  $('#section-2').waypoint(function(direction) {
    if (direction === 'down') {
      $('.nav').addClass('fixed');
    }
  }).waypoint(function(direction) {
    if (direction === 'up') {
      $('.nav').removeClass('fixed');
    }
  });

  // swap colors over dark sections
  $('.dark').waypoint(function(direction) {
    if (direction === 'down') {
      $('.swap').addClass('text-yellow');
    }
  }, { offset: '50%' }).waypoint(function(direction) {
    if (direction === 'up') {
      $('.swap').addClass('text-yellow');
    }
  }, { offset: '-50%' });

  $('.light').waypoint(function(direction) {
    if (direction === 'down') {
      $('.swap').removeClass('text-yellow');
    }
  }, { offset: '50%' }).waypoint(function(direction) {
    if (direction === 'up') {
      $('.swap').removeClass('text-yellow');
    }
  }, { offset: '-50%' });

  // play video when it enters viewport
  $('#section-3').waypoint(function(direction) {
    if (direction === 'down') {
      $('#video').get(0).play();
    }
  }, { offset: '50%' }).waypoint(function(direction) {
    if (direction === 'up') {
      $('#video').get(0).play();
    }
  }, { offset: '-50%' });

  // pause video when it leaves viewport
  $('#section-4').waypoint(function(direction) {
    if (direction === 'down') {
      $('#video').get(0).pause();
    }
  }, { offset: '25%' })

  $('#section-3').waypoint(function(direction) {
    if (direction === 'up') {
      $('#video').get(0).pause();
    }
  }, { offset: '75%' });

  $(document).keypress(function(e)
  {
    if(e.keyCode == 32) {
      goToNextNavItem()
      return false;
    }
  });

  function goToNextNavItem() {
    if ($('.nav .current').length) {
      $('.nav .current').next('li').find('a').click();
    } else {
      $('a.next-section').click();
    }
  }


  $(window).trigger('resize');
});
