$(document).ready(function(){
	var navItemSelector = '#navbar ul.nav li a';
	$(navItemSelector).click(function(element,event){

		//Remove the active class from all nav items
		$(navItemSelector).parents('li').removeClass('active');

		//Add to current clicked item
		$(this).parents('li').addClass('active');


	});
});