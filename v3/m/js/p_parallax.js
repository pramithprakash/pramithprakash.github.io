$(document).ready(function(){
	loadComplted();
	setTimeout(function(){
		$("#header").animate({
			minHeight:98
		},1000);
	},3000);
});

function loadComplted() {
    screen_height=$(window).height();
    screen_width=$(window).width();
	var $window = $(window);
	var $homeBG = $('#home');
	var windowHeight = $window.height(); //get the height of the window
}
