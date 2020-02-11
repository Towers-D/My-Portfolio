$(function width() {
	var div = $('#gameContainer');
	var width = div.width();
	div.css('height', ((width/16)*9));
});

$(window.resize(function() {
	width();
});