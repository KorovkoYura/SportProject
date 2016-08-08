$(document).ready(function() {

	$('.team-round').hover(function() {

		$(this).addClass('rotate');

		}, function() {
			$('.team-round').removeClass('rotate');
		});
});

$(document).ready(function(){
	 $('a[href*=#]').bind("click", function(f){
			var anchor = $(this);
			$('html, body').stop().animate({
				 scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			f.preventDefault();
	 });
	 return false;
});

$(document).ready(function(){
   $('a[href*=#services]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top-100
      }, 1000);
      e.preventDefault();
   });
   return false;
});

$(document).ready(function(){
   $('a[href*=#team]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top+150
      }, 1000);
      e.preventDefault();
   });
   return false;
});