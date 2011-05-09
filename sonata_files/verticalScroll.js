(function($j) {
	$j.fn.verticalScroll = function(){
	  this.each(function() {  

		var obj = $j(this);

		var screenSize     = 0;
		var halfScreenSize = 0;
		var xPosition=0;
		var yPosition = 0;
		var easing         = 'swing';
		var currPos = $j(obj)[0].offsetTop;

		$j(obj).css('top',currPos);

		$j(window).scroll(function(){
			var nextPos = $j(document).scrollTop();
			if (nextPos>currPos) {
		   		yPosition = nextPos+"px";
			} else {
		   		yPosition = currPos+"px";
			}
    		$j(obj).stop().animate({"top":yPosition},{duration:400, easing:easing, queue:false});
		});

	  });
	};
})(jQuery);