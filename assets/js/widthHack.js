
$(window).resize(function() {
	$(function width() {
		var div = $('#gameContainer');
		var canvas = $('#canvas');
		
		var width = div.width();
		canvas.css('width', width);
		var height = (width/16)*9;
		canvas.css('height', height)
		div.css('height', height);
	});
});