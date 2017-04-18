$(document).ready(function(){
  $('.parallax').parallax();
  // $('#fullpage').fullpage();

  $('.menu-btn').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );

  $('#service-btn').click(function() {
    $('#services').animatescroll();
  });
  $('#skills-btn').click(function() {
    $('#skills').animatescroll();
  });
  $('#pricing-btn').click(function() {
    $('#pricing').animatescroll();
  });
  $('#works-btn').click(function() {
    $('#works').animatescroll();
  });
  $('#quote-btn').click(function() {
    $('#quote').animatescroll();
  });
  $('#contact-btn').click(function() {
    $('#contact').animatescroll();
  });

  jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},4000);
	});
});


  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.4;

    window.onscroll = function(){
      [].slice.call(parallax).forEach(function(el,i){

        var windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

        el.style.backgroundPosition = elBackgrounPos;

      });
    };
})
