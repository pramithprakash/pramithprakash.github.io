$(document).ready(function(){loadComplted();$(".linkow ul").niceScroll();$("html").niceScroll();setTimeout(function(){$("#header").animate({minHeight:98},1000);},3000);});function loadComplted(){screen_height=$(window).height();screen_width=$(window).width();RepositionNav();var deck=new $.scrolldeck({buttons:'.navigation',slides:'.slide',duration:600,easing:'linear',offset:0});var $window=$(window);var $homeBG=$('#home');var windowHeight=$window.height();$window.resize(function(){resetResize();});$window.bind('scroll',function(){});}
function resetResize(){}
$(window).resize(function(){resetResize();});