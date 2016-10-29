	wh = $(window).height();
	ww = $(window).width();
$(function(){
	
	//get window's dimensions
	wh = $(window).height();
	ww = $(window).width();
	
	//get center position
	ch = wh/2;
	cw = ww/2;



//animate moving circles
	$("#moving_circle_4").stop().animate({
		"width" : "400px",
		"height" : "400px",
		"opacity" : "1.0"
	},0,function(){
		$("#a-loader").animate({opacity:1},0);
			$(this).delay(1600).animate({
				"width" : "1200px",
				"height" : "1200px",
				"opacity" : "1.0"
		  },1000,function(){
			  		
					
					
					setTimeout(function(){
					$("#a-loader").css('visibility','visible');
					$('body').css('overflow','auto');
					$('body').css('overflow-y','scroll');
					$("#a-loader").animate({opacity:1},3500);$("#loaderove").css("display","none");$("body").addClass("bgimg");
					},0);
					//setTimeout(function(){$(".bgr").animate({height:wh},3500);},1200);

			 	})
	});	});


jQuery.extend({
	random: function(X) {
	    return Math.floor(X * (Math.random() % 1));
	},
	randomBetween: function(MinV, MaxV) {
	  return MinV + jQuery.random(MaxV - MinV + 1);
	}
});
function startBalloon(){
	initBalloonDimensions();
	animateBalloon();
}
function initBalloonDimensions(){
	var $balloonWidth = $('#balloon').width();
	var $balloonHeight = $('#balloon').height();

	/*horizontal limits*/
	var $skyWidth = $('#balloon').parent('body').width();
	$skyLeftLimit = '255';
	$skyRightLimit = (($skyWidth - $balloonWidth) - 290);

	/*vertical limits*/
	var $skyHeight = $('#balloon').parent('body').height();
	$skyTopLimit = '0';
	$skyBottomLimit = ($skyHeight - 300);
}
function animateBalloon(){
	if(('#balloon').length){
		var $balloon = $('#balloon');
		var $effectDuration = $.randomBetween(30000, 60000);	
		var $balloonPositionLeft = $balloon.css('left');
		var $balloonPositionTop =  $balloon.css('top');
		var $newXPosition = $.randomBetween($skyRightLimit, $skyLeftLimit);
		var $newYPosition = $.randomBetween($skyBottomLimit, $skyTopLimit);
		var $newWidth = $.randomBetween(25, 75);
		$balloon.animate({ 
			top: $newYPosition+'px',
			left: $newXPosition+'px',
			width:$newWidth+'px'
		}, $effectDuration, function() {
			$balloon.removeClass('up');
			animateBalloon();
		});
	}
}

		
	
		
var i;
$(window).load(function(){
	resetcareercurve();
		startTimermenu();
		var mymenuTimer;
		var mymenuTimerWhole;

		var mi =  1;
		

		function startTimermenu() {
			mymenuTimer = window.setInterval( function() {

			 if (mi == 99){
				 $(".mainmenu li:eq(0)").removeClass('jhover');
				 $(".mainmenu li:eq(1)").removeClass('jhover');
				 $(".mainmenu li:eq(2)").removeClass('jhover');
				  window.clearInterval(mymenuTimer);}
			 else if (mi == 1){
				 $(".mainmenu li:eq(0)").addClass('jhover');
				 $(".mainmenu li:eq(1)").removeClass('jhover');
				 $(".mainmenu li:eq(2)").removeClass('jhover');}
			else if (mi == 2){
				 $(".mainmenu li:eq(0)").removeClass('jhover');
				 $(".mainmenu li:eq(1)").addClass('jhover');
				 $(".mainmenu li:eq(2)").removeClass('jhover');}
			else if (mi == 3){
				 $(".mainmenu li:eq(0)").removeClass('jhover');
				 $(".mainmenu li:eq(1)").removeClass('jhover');
				 $(".mainmenu li:eq(2)").addClass('jhover');
				 mi =98 ;
				 }
			mi = mi + 1;	 
			}, 1000);
		};
    mymenuTimerWhole = window.setInterval( function() {
	  startTimermenu();
	  mi = 0;
    }, 100000);

	
	window.setInterval( function() {
		 $('.ballsLG b').mouseover();
		 $('.ballsLG b').animate({
			 opacity:0
		 },400);
    }, 2000);
		
	$(".logoInner").css('opacity','0');  
    $(".contactUSR").css('opacity','0');
	
	
  var x = 870; 
  var t = 900; 
function loadd(){
	$('.bodybg').addClass('rotateload');
  setTimeout(function(){
	$("html,body").animate({ scrollTop: x }, t, function(){
	$(".logoInner").css('visibility','visible');
	$(".logoInner").animate({
	  opacity: '1'
	},1000); 
	$("html,body").scrollTop(0);
	$('#wrapperContentOuter').slideDown('slow');
	});
	},0);
}	

loadd();

	


$(function(){
    $('.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});

/*	$(".scroll").click(function() {
        $.scrollTo($($(this).attr("href")), {
        duration: 1000
    });
  return false;
    });*/
	
	
	
	$('body,html').scrollTop(0);	
	var ballon1='<img src="images/ballon.png" id="balloon" class="ballon" alt="pramithprakash" />';
	setTimeout(function(){					  
	 $('body').append(ballon1);	
	  startBalloon();
	},3000);
	
});
$(document).ready(function(){
	$('.socialHome a').tipsy({gravity: 'n'}); // nw | n | ne | w | e | sw | s | se
	resetcareercurve();
	$('#map_canvas').css('visibility','hidden');
 //$('.aboutCntBlkP,#contactme,#careerLnk').css('visibility','hidden');
 $('#home_COntent').css('visibility','visible');
 $('.bodybg').animate({marginLeft:$(window).width()-351},1000,function(){$('.bodybg').addClass('rotateload');});
 $('.bodybg').find('img').animate({width:'180%'},700);
 $('.bodybg').find('img').animate({width:'351px'},1000,function(){$('.bodybg').removeClass('rotateload');});
 

 $('.bodybg').css('opacity','0.2');
			$('.aboutLnk .scroll').click(function(){
				$('#map_canvas').css('visibility','hidden');
				$(".bgr").animate({opacity:0},0);
				setTimeout(function(){$(".bgr").animate({opacity:0.2},3500);},1000);
				 $('.bodybg').animate({marginLeft:$(window).width()-351},1000);
				 $('.bodybg').find('img').animate({width:'180%'},700);
   				 $('.bodybg').find('img').animate({width:'351px'},1000);
			//$('.mainmenu').animate({top:'72px'},1000);
				$('.logoinner').animate({opacity:'0.3'},200);
				 $('.CSSDANO').animate({top:'0'},2000);
				 
				//$('#home_COntent,#contactme,#careerLnk').css('visibility','hidden');
				 $('.aboutCntBlkP h3').animate({opacity:'0'},0);
				 $('.aboutCntBlkP .aboutCntBlk').animate({opacity:'0'},0);
				 $('.aboutCntBlkP .aboutCntBlkMini').animate({opacity:'0'},0);
				 $('.aboutCntBlkP .experiencer').animate({opacity:'0'},0);
			    $('.aboutCntBlkP').css('visibility','visible');
				// $('#home_COntent').animate({opacity:'0'},0);
				 setTimeout(function(){
				 $('.aboutCntBlkP h3').animate({opacity:'1'},2000);
				  },700);
				 setTimeout(function(){
				  $('.aboutCntBlkP .aboutCntBlk').animate({opacity:'0.5'},2000);
				 },700);
				 setTimeout(function(){
				   $('.aboutCntBlkP .aboutCntBlkMini').animate({opacity:'0.5'},2000);
				  },900); 
				 setTimeout(function(){
				    $('.aboutCntBlkP .experiencer').animate({opacity:'1'},2000);
					$('.aboutCntBlkP .experiencer').mouseover();
				
				},1000); 
				 });
			$('.contactmemlnl .scroll').click(function(){
				$('#map_canvas').css('visibility','visible');
				$(".bgr").animate({opacity:0},0);
				setTimeout(function(){$(".bgr").animate({opacity:0.2},3500);},1000);
				var count=0;	
				$('.bodybg').animate({marginLeft:'220px'},1000); 
				$('.bodybg').find('img').animate({width:'180%'},700);
 				$('.bodybg').find('img').animate({width:'351px'},1000);
				//$('.mainmenu').animate({top:'72px'},1000);
				$('.logoinner').animate({opacity:'0.3'},200);
				$('.CSSDANO').animate({top:'0'},2000);
				
				$('#map_canvas').height($(window).height());
				$('#map_canvas').width($(window).width());
				
				//$('#home_COntent,.aboutCntBlkP,#careerLnk').css('visibility','hidden');
				 $('#contactme h3').animate({opacity:'0'},0);
				 $('#contactme .contactForm').animate({opacity:'0'},0);
				 $('#contactme .contactFormMini').animate({opacity:'0'},0);
				 $('#contactme .offer-box').animate({opacity:'0'},0);
			    $('#contactme').css('visibility','visible');
				//  $('#home_COntent').animate({opacity:'0'},0);
				  setTimeout(function(){
				 $('#contactme h3').animate({opacity:'1'},2000);
				  },700);
				 setTimeout(function(){
				  $('#contactme .contactForm').animate({opacity:'0.5'},2000);
				 },700);
				 setTimeout(function(){
				   $('#contactme .contactFormMini').animate({opacity:'0.5'},2000);
				  },800); 
				 setTimeout(function(){
				    $('#contactme .offer-box').animate({opacity:'1'},2000);
					initialize();
					
					
				},1000); 
				//$('html,body').animate({scrollTop: 0}, 0);
				$(window).resize();
				$('label.error').hide();
				$('#contact_form').find('.textfield').val('');
				$('#contact_form').find('.textarea').val('');
				setTimeout(function(){
				  $('.contactFormMiniCntHdr .skypemg').mouseover();
				},600); 
				setTimeout(function(){
				  $('.contactFormMiniCntHdr .fbmg').mouseover();
				},2200); 
				setTimeout(function(){
				  $('.contactFormMiniCntHdr .twmg').mouseover();
				},3300); 
				setTimeout(function(){
				  $('.contactFormMiniCntHdr .gpmg').mouseover();
				},4400); 
				setTimeout(function(){
				  $('.contactFormMiniCntHdr .lnmg').mouseover();
				},5500); 
				
			
				
				
				
				
				
				});
		var count=0;	
			$('.contactFormMiniCntHdr').mouseover(function(){
			    var skypemg = $('.skypemg');
				var fbmg = $('.fbmg');
				var twmg = $('.twmg');
				var gpmg = $('.gpmg');
				var lnmg = $('.lnmg');
				
				var skypemgposition = skypemg.position();
				var fbmgposition = fbmg.position();
				var twmgposition = twmg.position();
				var gpmgposition = gpmg.position();
				var lnmgposition = lnmg.position();
					
				
				
		  });
			$('.logorotate').hover(function(){
					$('.wrapperHeaderOuterBG').height($(window).height())					
				},
				function(){
					$('.wrapperHeaderOuterBG').height('178px')								
			   }
			);
											
											
			$('.homeLnk .scroll').click(function(){
				$('#map_canvas').css('visibility','hidden');
				$(".bgr").animate({opacity:0},0);
				setTimeout(function(){$(".bgr").animate({opacity:0.2},3500);},1000);
			    $('.bodybg').animate({marginLeft:$(window).width()-351},1000);
			    $('.bodybg').find('img').animate({width:'180%'},700);
 			   $('.bodybg').find('img').animate({width:'351px'},1000);
			   //$('.mainmenu').animate({top:'72px'},1000);
			   $('.logoinner').animate({opacity:'1'},200);
			   $('.CSSDANO').animate({top:'91px'},2000);
			   
			  // $('.aboutCntBlkP,#contactme').css('visibility','hidden');
			   $('#home_COntent').css('visibility','visible');
			 //  $('#home_COntent').animate({opacity:'0'},0);
			   setTimeout(function(){
			   $('#home_COntent').animate({opacity:'1'},800);
			  
				 },500);
			   });
	resizeDimension();	
	
$('.rotateload').css('opacity','0.2');
	breakDIV('.experiencer');	
	breakDIV('.contactFormMiniCntHdr a');	
	breakDIV('.contactFormMiniCntHdr span');	
	breakDIV('.ballsLG b');	





 });
$(window).resize(function(){
	resizeDimension();						   
});
$(window).scroll(function(){
	//resizeDimension();	
});
function resizeDimension(){
	$('#home_COntent,.aboutCntBlkP,#contactme,#careerLnk').css('min-height',$(window).height());
	$('#fixed-section').height($(window).height());
	$('#map_canvas').height($(window).height());
	$('#map_canvas').width($(window).width());
	//initialize();
}

					  

function breakDIV(els){
	jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});
	
	$.pramith_pMov=function(el,options){var base=this,origWidth,origHeight,newWidth,origLeft,origTop;base.$el=$(el);base.$el.data("pramith_pMov",base);base.stopAnimation=function(){base.options.keepGoing=false;}
base.runAnimation=function(){if(base.options.keepGoing){origWidth=base.$el.width();origHeight=base.$el.height();origLeft=base.$el.position().left;origTop=base.$el.position().top;if(base.options.sizeAdjustment==100){newWidth=origWidth;newHeight=origHeight;halfWayWidth=origWidth;halfWayHeight=origHeight;}else{newWidth=parseInt(origWidth)*(base.options.sizeAdjustment/100);newHeight=parseInt(origHeight)*(base.options.sizeAdjustment/100);halfWayWidth=(parseInt(origWidth)+newWidth)/2;halfWayHeight=(parseInt(origHeight)+newHeight)/2;};if(base.$el.css("position")!="absolute"){base.$el.css("position","relative");}
base.$el.css("z-index",base.options.zIndexValues[0]);base.$el.animate({top:["+="+(base.options.height/2)+"px",'easeInQuad'],left:["+="+(base.options.width/2)+"px",'easeOutQuad'],width:[halfWayWidth,'linear'],height:[halfWayHeight,'linear'],opacity:1},base.options.speed,function(){base.$el.css("z-index",base.options.zIndexValues[1]);}).animate({top:["+="+(base.options.height/2)+"px",'easeOutQuad'],left:["-="+(base.options.width/2)+"px",'easeInQuad'],width:[newWidth,'linear'],height:[newHeight,'linear']},base.options.speed,function(){base.$el.css("z-index",base.options.zIndexValues[2]);}).animate({top:["-="+(base.options.height/2)+"px",'easeInQuad'],left:["-="+(base.options.width/2)+"px",'easeOutQuad'],width:[halfWayWidth,'linear'],height:[halfWayHeight,'linear']},base.options.speed,function(){base.$el.css("z-index",base.options.zIndexValues[3]);}).animate({top:["-="+(base.options.height/2)+"px",'easeOutQuad'],left:["+="+(base.options.width/2)+"px",'easeInQuad'],width:[origWidth,'linear'],height:[origHeight,'linear']},base.options.speed,function(){base.$el.css("z-index",base.options.zIndexValues[0]);if(base.options.loop===true){base.runAnimation();}});}};base.init=function(){base.options=$.extend({},$.pramith_pMov.defaultOptions,options);base.runAnimation();};base.init();};$.pramith_pMov.defaultOptions={speed:400,height:200,width:200,sizeAdjustment:100,loop:false,zIndexValues:[1,1,1,1],keepGoing:true};$.fn.pramith_pMov=function(options){if(typeof(options)==="string"){return this.each(function(){var safeGuard=$(this).data('pramith_pMov');if(safeGuard){safeGuard.stopAnimation();}});}else{return this.each(function(){(new $.pramith_pMov(this,options));});}};


$(els).each(function(){$(this).pramith_pMov({speed:Math.floor(Math.random()*300)+100,height:Math.floor(Math.random()*1000)-470,width:Math.floor(Math.random()*1000)-470});}).mouseenter(function(){$(this).pramith_pMov({speed:Math.floor(Math.random()*300)+100,height:Math.floor(Math.random()*1000)-470,width:Math.floor(Math.random()*1000)-470});});

}




/*themeColor_p=randomthemeColor_p();
switch(themeColor_p)
{case"cyan":$('body').removeClass();$('body').addClass('cyan');break;case"magenta":$('body').removeClass();$('body').addClass('magenta');break;case"green":$('body').removeClass();$('body').addClass('green');break;case"orange":$('body').removeClass();$('body').addClass('orange');break;default:$('body').addClass('orange');}

function randomthemeColor_p(){var themeColor_ps=["cyan","magenta","green","orange"];setthemeColor_p=themeColor_ps[Math.random()*themeColor_ps.length>>0];return setthemeColor_p;}*/

$(window).resize(function(){
	wh = $(window).height();
	ww = $(window).width();
	setTimeout(function(){$(".bgr").animate({opacity:0.2},3500);},1000);
	
});



$('.career_l .scroll').click(function(){
	$('#map_canvas').css('visibility','hidden');
				resetcareercurve()
	            $('.careerPathAniParent').animate({opacity:'0'},0);
				$(".bgr").animate({opacity:0},0);
				 setTimeout(function(){$(".bgr").animate({opacity:0.2},3500);},1000);
				 $('.bodybg').animate({marginLeft:$(window).width()-351},1000);
				 $('.bodybg').find('img').animate({width:'180%'},700);
   				 $('.bodybg').find('img').animate({width:'351px'},1000);
			//$('.mainmenu').animate({top:'72px'},1000);
				$('.logoinner').animate({opacity:'0.3'},200);
				 $('.CSSDANO').animate({top:'0'},2000);
				 
				//$('#home_COntent,#contactme,.aboutCntBlkP').css('visibility','hidden');
				 $('#careerLnk h3').animate({opacity:'0'},0);
				
			    $('#careerLnk').css('visibility','visible');
				// $('#home_COntent').animate({opacity:'0'},0);
				 setTimeout(function(){
				 $('#careerLnk  h3').animate({opacity:'1'},2000);
				  },700);
				 setTimeout(function(){
				  $('.careerPathAniParent').animate({opacity:'1'},2000);
				 },700);
				 setTimeout(function(){
				  curve('.career_01','149','803');
				 },100);
				  setTimeout(function(){
				  curve('.career_02','249','805');
				 },800);
				 setTimeout(function(){
				  curve('.career_03','373','783');
				 },1500);
				 setTimeout(function(){
				  curve('.career_04','512','708');
				 },2200);
			
});
function resetcareercurve(){
	rww = $(window).width()+85;
	$('.career_01,.career_02,.career_03,.career_04').css('right',rww+'px').css('top','-422px');
}
function curve (p,t,r) {
	
    $(p).delay(3000).animate({top: t, right: r}, {
       duration: 1500, 
       specialEasing: {top: 'easeOutQuad', right: 'easeInQuad'}, 
      complete: function () {
		  
	$(p).tipsy({gravity: 'w'}); // nw | n | ne | w | e | sw | s | se
		  
		  }
    });
}

