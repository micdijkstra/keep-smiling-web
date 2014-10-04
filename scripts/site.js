$(document).ready(function() {



	// vertical center section contents
/*
	$('.js-vertical-align-parent').each(function(){
	content = $('.content-middle');
	contentHeight = content.height();
	wrapper = $(window).height();
	offset = (wrapper - contentHeight) / 2;

	console.log(wrapper);
	console.log(contentHeight);
	console.log(offset);

	$(window).resize(function() {
		$(content).css('margin-top', offset);
  });

  $(window).trigger('resize');
*/


  $(window).resize(function() {

	 if ($(window).width() >= 480) {
	    $('.section').each(function(){
	      var parent = $(this);
	      var child = $(this).find('.content-middle');
	      var topMargin = ((parent.height() - child.height()) / 2);

	      child.css('margin-top', topMargin);

	      console.log(parent);
	      console.log(child);

	    });
    } else {

    }

  });

  $(window).trigger('resize');



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













});


/*
	  $(document).scroll(function() {

	      if ($('#section-5') > 0) $('.site-header').addClass(".text-yellow");
	      if (top === 0) $('nav').removeClass("drop-shadow");

  });
*/