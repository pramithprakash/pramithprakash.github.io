function activeScroll(){var e=$("#about").offset().top-100,i=$("#looks").offset().top-100,t=$("#portfolio").offset().top-100,n=$("#contact").offset().top-100;e<$(window).scrollTop()&&i>$(window).scrollTop()?($(".menu li a").removeClass("active"),$(".link1").addClass("active")):i<$(window).scrollTop()&&t>$(window).scrollTop()?($(".menu li a").removeClass("active"),$(".link2").addClass("active")):t<$(window).scrollTop()&&n>$(window).scrollTop()?($(".menu li a").removeClass("active"),$(".link3").addClass("active")):n<$(window).scrollTop()?($(".menu li a").removeClass("active"),$(".link4").addClass("active")):e>$(window).scrollTop()&&$(".menu li a").removeClass("active")}$(document).ready(function(){function e(){5==$("#owl-demo").find(".active").length||4==$("#owl-demo").find(".active").length?($(".shine").find(".arrow").css("left","50%"),$(".shine").find(".arrow").css("margin-left","-26px"),$(".shine").find(".content-de").html($(".shine").find(".active:eq( 1 )").find("img").attr("data-desc"))):3==$("#owl-demo").find(".active").length?($(".shine").find(".arrow").css("left","152px"),$(".shine").find(".content-de").html($(".shine").find(".active:eq( 0 )").find("img").attr("data-desc"))):2==$("#owl-demo").find(".active").length&&($(".shine").find(".arrow").css("left","50%"),$(".shine").find(".arrow").css("margin-left","-26px"),$(".shine").find(".content-de").html($(".shine").find(".active:eq( 0 )").find("img").attr("data-desc")))}$("body").niceScroll(),$(".expand-link").on("click",function(){$(this).parents(".expand").find("p,div").slideToggle(),$(this).toggleClass("active")}),$("#banner,#banner img").css("min-height",$(window).height()),$("#banner").owlCarousel({navigation:!0,autoplayTimeout:3e3,smartSpeed:1e3,loop:!0,nav:!0,items:1,autoplay:!0,singleItem:!0,callbacks:!0,onInitialized:function(){$("#banner").find(".item").each(function(){$(this).css("background-image","url("+$(this).find("img").attr("src")+")")})}});$("#owl-demo");$("#owl-demo").owlCarousel({loop:!0,nav:!0,items:3,rewindNav:!0,autoPlay:!1,scrollPerPage:!1,addClassActive:!0,margin:20,responsive:{0:{items:1,nav:!0,loop:!0},748:{items:2,nav:!0,loop:!0},925:{items:3,nav:!0,loop:!0}},callbacks:!0,onInitialized:e,onTranslated:e}),$(".mobilemenu").on("click",function(){$(".menu").slideToggle(),$(this).toggleClass("active")}),$("form#contact-us").submit(function(){$("form#contact-us .error").remove();var e=!1;if($(".requiredField").each(function(){if(""==$.trim($(this).val())){var i=$(this).prev("label").text();$(this).parent().append('<span class="error">Your forgot to enter your '+i+".</span>"),$(this).addClass("inputError"),e=!0}else if($(this).hasClass("email")){var t=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;if(!t.test($.trim($(this).val()))){var i=$(this).prev("label").text();$(this).parent().append('<span class="error">Sorry! You\'ve entered an invalid '+i+".</span>"),$(this).addClass("inputError"),e=!0}}}),!e){$(".subbutton").hide();var i=$(this).serialize();$.post($(this).attr("action"),i,function(){$("form#contact-us").slideUp("fast",function(){$(this).before('<p class="sucessmsg"><strong>Thanks!</strong> Your email has been delivered. Huzzah!</p>')})})}return!1})}),$(".imgs").on("click",function(){if($(".mobilemenu").is(":hidden")){var e=$(this),i=e.position();$(".largepopup").css({top:i.top+e.height()/2,left:i.left+e.width()/2,opacity:1,marginLeft:0,marginTop:0}),$("#image-cnt").html('<img style="opacity:0.8" src="'+e.attr("data-large-image")+'" />'),$(".largepopup").stop().animate({width:"100%",height:"100%",marginLeft:"-"+i.left,marginTop:"-"+i.top,top:i.top,left:i.left},1e3,function(){$("#image-cnt").find("img").css("opacity",1)})}}),$(".largepopup").find(".close").on("click",function(){$("#image-cnt").html(""),$(".largepopup").stop().animate({opacity:0},2e3,function(){$(".largepopup").css({width:0,height:0}),$("#image-cnt").find("img").css("opacity",.8)})}),$(".menu a").on("click",function(e){if($(".mobilemenu").toggleClass("active"),$(".menu").hide(),"#"==$(this).attr("href").substr(0,1)){e.preventDefault();var i=0;$(".mobilemenu").is(":hidden")||(i=$(".left-panel").height()),anchor=$(this).attr("href"),$("html,body").animate({scrollTop:$(anchor).offset().top-i},800,"easeInOutExpo"),$(".menu a").removeClass("active"),$(this).addClass("active")}}),$(window).on("scroll",function(){activeScroll()});