(function($) {
	function setHeight() {
        $("#top").outerHeight(window.innerHeight);
    }
	
    $(document).ready(setHeight());
	$(window).on('resize', function(){
      setHeight();
	});
})(jQuery)