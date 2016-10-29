// JavaScript Document
/*
Author: Henry Wong
Date: May 2013
Company: The Kitchen Ltd
Website: http://www.kitchen-digital.com

*/
var is_IE7     = $.browser.msie && ($.browser.version == 7);
var is_IE8     = $.browser.msie && ($.browser.version == 8);
var is_iPhone  = navigator.userAgent.indexOf("iPhone") != -1 ;
var is_iPod    = navigator.userAgent.indexOf("iPod") != -1 ;
var is_iPad    = (navigator.userAgent.indexOf("iPad") != -1);
var is_OSApple = is_iPhone || is_iPod || is_iPad ;
var is_Mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
var isSimpleVersion = is_IE7||is_IE8 || is_iPad || is_iPhone || is_Mobile;

//project's 
var sectionCtl      = null;
var wathcingSection = 1;


$(document).ready(function() {
	if(is_OSApple){
		$('body').addClass("ipad");
	}

	if(isSimpleVersion){
	   var head = document.getElementsByTagName('head')[0],
	   link = document.createElement('link');
	   link.type = 'text/css';
	   link.rel = 'stylesheet';
	   link.href = "css/ie_fix.css";
	   head.appendChild(link);
	}
	//section indication
	sectionCtl = new SectionIndication("section > .slide");
	sectionCtl.initAry();

	window.addEventListener( 'orientationchange', sectionCtl.initAry, false );

	//go to next slide
	$(".go_next_section a").bind("click", function(){
		goNextSection();
	});

	$(window).scroll();

	//menu
	var my_menu = new autoShowHideMenu();
	my_menu.init();

	//setup nav btn
	setUpNavBtn();

	//page 6  color section box
	$(".page_6 .title_block").each(function(){
		var h = $(this).next().outerHeight(true);
		$(this).height(h);
		if(!is_IE7) $(this).find(".valign").height(h);
	});

	//page0 intro animation
	TweenMax.from($(".page_0 img:nth-child(1)"),1,{"opacity":0,delay:0.5});
	TweenMax.from($(".page_0 img:nth-child(2)"),1.8,{"opacity":0,delay:0.5});
	TweenMax.from($(".page_0 .desc"),2,{"opacity":0,delay:0.5});

	setTimeout(function(){
		setup();
		scrollHandler = new Stepper(300,main_timeline);
		// console.log("ok");
	},1000);

	if(isSimpleVersion){
		//perpare all the jquery cycle section
		initCycle();
	}

	//validation	
	$("#subbmitForm").validate({
		rules: {
				txt_name:{
					required: true,
					minlength: 2,
					maxlength: 255
				},
				txt_surname:{
					required: true,
					minlength: 2,
					maxlength: 255
				},
				txt_email:{
					required: true,
					email: true,
					minlength: 5,
					maxlength: 255
				},
				txt_subject:{
					required: true,
					minlength: 3,
					maxlength: 255
				},
				txt_message:{
					required: true,
					minlength: 3,
					maxlength: 4000
				}
			},
		messages: {
				txt_name: "",
				txt_surname: "",
				txt_email: "",
				txt_subject: "",
				txt_message: ""
			},
		invalidHandler: function(form, validator) {
			$("#err").removeClass("success");
			$("#err").html("Please fill in all fields!");
		},
		errorPlacement: function(error, element) {
			//console.log(element);
		},
		submitHandler: function(form) {
			//disable click event to prevent double submit
			//$("#btn_submit").attr("disabled", "disabled");			
			var inputField = {Name:"txt_name", Surname:"txt_surname", Subject:"txt_subject", Email:"txt_email", Message:"txt_message"};
			var txt_name = $("#txt_name").val();
			var txt_surname= $("#txt_surname").val();
			var txt_subject = $("#txt_subject").val();
			var txt_email = $("#txt_email").val();
			var txt_message = $("#txt_message").val();
			$.ajax({
				type:"post",
				url: "php/submission.php",
				data: "txt_name="+txt_name+"&txt_surname="+txt_surname+"&txt_subject="+txt_subject+"&txt_email="+txt_email+"&txt_message="+txt_message,
				dataType:"json",
				success: function(data){
					//enable click event on "#btn_submit"
					$("#btn_submit").removeAttr("disabled");
					if(!data.isTrue){
						$("#err").html("Please enter a valid information!");
						/*
						$("#err").html(data.errorMsg);
						for(var key in inputField){
							var fieldName = inputField[key];							
							if($.inArray(key,data.errorField) > (-1) ){	
								$("#"+fieldName).addClass("inputError");
								$("#err").html("Please enter a valid information!");
							}else{
								$("#"+fieldName).removeClass("inputError");
							}							
						}
						*/
					}else{
						$("#contact_form .text").val("");
						$("#err").html("Your message has been sent successfully!").addClass("success");
					}
				}
			});
		}
	});

 });

function initCycle(){
	//Cycle
	$(".jcycle").each(function(){
		var pagerName = $(this).parents(".slide").attr("id");
		var _parent   = $(this).parents("article.slide");
		var _fx       = 'scrollHorz';

		if($(this).hasClass("fade")){
			_fx = 'fade';
		}

		$(this)
		.before('<div id="slide_indicator_'+ pagerName +'" class="slide_indicator">')
		.cycle({
			fx:					_fx,
			timeout:			0,
			after:				onAfter,
			next:				$(_parent).find(".slider_next"),
			prev:				$(_parent).find(".slider_prev"),
			pager:				'#pager_'+pagerName,
			cleartypeNoBg:		true,
			pagerAnchorBuilder: function(index, el) {
				return '<a href="#">&nbsp;</a>';
			}
		});
	});
}
function onAfter(currSlideElement,nextSlideElement,options){
	if(options.currSlide === 0){
		$(options.prev[0]).hide();
	}
	else{
		$(options.prev[0]).show();
	}

	if(options.currSlide == options.slideCount - 1){
		$(options.next[0]).hide();
	}
	else{
		$(options.next[0]).show();
	}
}

function sideNavTo(pageNum){
	if(isSimpleVersion){
		$("html,body").animate({scrollTop: $("#page_"+pageNum).offset().top}, 1500);
		// my_menu.closeMenu();
		return;
	}

	_stepper.directTo("lbl_"+(pageNum + 1));
}

function setUpNavBtn(){
	if(isSimpleVersion){
		$("#side-menu-totop, .btn_back_to_top").bind("click",function(){
			sideNavTo(0);
		});

		$("#side-menu-prev").bind("click",function(e){
			e.preventDefault();
			var currentSection = sectionCtl.getCurrentSection($(document).scrollTop());
			var goTo           = (parseInt(currentSection,10)-1 <=0) ? 0 : parseInt(currentSection,10)-1;
			// console.log(currentSection);
			sideNavTo(goTo);
		});

		$("#side-menu-next").bind("click",function(e){
			e.preventDefault();
			var currentSection = sectionCtl.getCurrentSection($(document).scrollTop());
			var goTo           = parseInt(currentSection,10)+1;
			// console.log(currentSection);
			sideNavTo(goTo);
		});

		return;
	}

	$("#side-menu-totop, .btn_back_to_top").bind("click",function(){
		_stepper.directTo(0);
	});

	$("#side-menu-prev").bind("click",function(){
		// var currentSection = _stepper.getCurrentLabel().replace("lbl_","");
		// var gotoSection    = ( parseInt(currentSection,10) - 1 ) < 0 ?  0 : ( parseInt(currentSection,10) - 1 );

		// _stepper.directTo(gotoSection);
		var number = getTimeLineCurrentLabel();
		number = parseInt(number.replace("lbl_",""));


		var label = "lbl_" + number;
		// console.log(label);
		_stepper.directTo(label);

	});

	$("#side-menu-next").bind("click",function(){
		// var currentSection = _stepper.getCurrentLabel().replace("lbl_","");

		// _stepper.directTo(parseInt(currentSection,10) + 1);
		var number = getTimeLineCurrentLabel();
		// console.log(number);

		number = parseInt(number.replace("lbl_",""));
		number += 2;

		//check the lable exist or not, if not exist do nothing
		if(main_timeline.getLabelTime("lbl_"+number) == -1){
			return;
		}


		var label = "lbl_" + number;
		_stepper.directTo(label);
	});
}
var aniTimer = null;
function tryAniTo(sec,direction){
	clearTimeout(aniTimer);
	aniTimer = setTimeout(function(){
		main_timeline.timeScale(1);

		// var moreTime  = 0.2;
		// var timeSpeed = 0.5;

		// sec = (sec - moreTime <= 0)? 0.000001 : sec - moreTime;

		// main_timeline.seek(sec,false);
		// if(direction == "up"){
		// 	console.log("?");
		// }else{
		// 	main_timeline.timeScale(timeSpeed);
		// 	main_timeline.tweenFromTo(sec - moreTime, sec);
		// }

		main_timeline.seek(sec,false);
	},1,sec);
}

function autoShowHideMenu(){
	this.delayClose_ts = 800;
	this.timerClose    = null;

	this.init = function(){
		_autoShowHideMenu = this;

		$("#side-menu-page").bind("click",this.showMenu);

		if(is_iPad){
			this.delayClose_ts = 4500;
		}
		else{
			//desktop version need hover event for menu btn
			$("#side-menu-page").bind("mouseenter",this.showMenu);
		}

		//bind hover event for menu
		$("#side-menu-page-details, #side-menu-page").hover(function(e) {
			if(is_iPad){
				return;
			}
			switch(e.type){
				case 'mouseenter':
					$(this).addClass("onHover");
					break;
				case 'mouseleave':
					$(this).removeClass("onHover");
					break;
			}
		});
	};

	this.showMenu = function(){
		if($('#side-menu-page-details').hasClass("show")){
			_autoShowHideMenu.closeMenu();
		}else{
			_autoShowHideMenu.openMenu();
			_autoShowHideMenu.delayClose();
		}
	};

	this.delayClose = function(){
		clearTimeout(this.timerClose);
		this.timerClose = setTimeout(function(){
			if($('#side-menu-page-details').hasClass("show") && !_autoShowHideMenu.isMenuStillHover()){
				_autoShowHideMenu.closeMenu();
			}
			else{
				_autoShowHideMenu.delayClose();
			}
		},_autoShowHideMenu.delayClose_ts);
	};

	this.isMenuStillHover = function(){
		if($('#side-menu-page').hasClass("onHover") || $('#side-menu-page-details').hasClass("onHover")){
			return true;
		}
		else{
			return false;
		}
	};

	this.closeMenu = function(){
		clearTimeout(this.timerClose);
		$('#side-menu-page-details').animate({
			width: '0'
		},300);
		$('#side-menu-page-details').removeClass("show");
	};

	this.openMenu = function(){
		//!!!!!! even can click even offset to div-main, so i set display none after all animation finished
		//now it need to set display block before animation
		$('#side-menu-page-details').animate({
			width: '878px'
		},300);
		$("#side-menu-page-details").addClass("show");
	};

}

