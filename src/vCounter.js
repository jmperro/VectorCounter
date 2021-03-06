(function( $ ) {

	$.fn.vCounter = function(options) {
		var settings = $.extend({
			speed: 2000,
			easing: 'swing'
		}, options );

		return this.each(function(i, elem) {
			$(elem).prop('animando', false);
			if (isScrolledIntoView(elem)) {
				animarcount(elem);
			}

			$(document).scroll(function() {
				if (isScrolledIntoView(elem)) {
					animarcount(elem);
				}
			});

			function animarcount(elem) {
				if (!$(elem).prop('animando')) {
					$(elem).prop('animando', true);
					$(elem).prop('contador', 0).animate({
						contador: $(elem).text()
					}, {
						duration: settings.speed,
						easing: settings.easing,
						step: function(now) {
							$(this).text(Math.ceil(now));
						}
					});
				}
			}

			function isScrolledIntoView(elem) {
				var docViewTop = $(window).scrollTop();
				var docViewBottom = docViewTop + $(window).height();

				var elemTop = $(elem).offset().top;
				var elemBottom = elemTop + $(elem).height();

				return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
			}
		});
	};

})( jQuery );