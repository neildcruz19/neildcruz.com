$(document).ready(function(){
	$("a.scroll[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(this.hash).offset().top}, 1000	, function(){window.location.hash = hash;});

		$(".navbar-collapse").collapse('hide');
	});

	$("section").css("min-height", $(window).height());

});

