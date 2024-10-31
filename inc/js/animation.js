(function($) {

	$('.animated').appear(function(){

		var element = $(this);
		var animation = element.data('animation');
		var animationDelay = element.data('delay');

		if (animationDelay) {
			setTimeout(function(){
			element.addClass( animation + " visible" );
			element.removeClass('hiding');
		}, animationDelay);
		} else {
			element.addClass( animation + " visible" );
			element.removeClass('hiding');
		}    
		
	},{accY: -150});

})(jQuery);