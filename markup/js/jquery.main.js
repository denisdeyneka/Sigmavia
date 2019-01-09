   jQuery(function(){
	initSlider();
});

function initSlider() {
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 2000,
		values: [ 100, 1000 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
}
   