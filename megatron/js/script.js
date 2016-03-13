$(document).ready(function() {
  $('.flexslider').flexslider({
  	animation: "fade",
  	controlNav : false,
  	directionNav : false,
  	animationLoop: true,
  	animationSpeed: 1000,
  	initDelay: 0,
  	pauseOnAction: false,
  	slideshow: true,
  	slideshowSpeed: 3000
	});
	$('.requestbtn').on('click',function(){
		$('#request').toggleClass('active')
	});
});