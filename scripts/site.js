$(document).ready(function() {

	// center content within sections
  $(window).resize(function() {

	 //if ($(window).width() >= 480) {
	    $('.section').each(function(){
	      var parent = $(this);
	      var child = $(this).find('.content-middle');
	      var topMargin = ((parent.height() - child.height()) / 2);

	      child.css('margin-top', topMargin);

	      console.log(parent);
	      console.log(child);

	    });
   // } else {

   // }

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
	        //I get fired when you enter a section and I pass the list item of the section
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
	  $('.nav').addClass('fixed');
	});

	// swap colors over dark sections
	$('.dark').waypoint(function(direction) {
	  $('.swap').addClass('text-yellow');
	}, { offset: '50%' });


	// play video when it enters viewport


	$(window).trigger('resize');
});