var scrollHandler = null;
var main_timeline = new TimelineMax();

var innerAniAry_short = ["lbl_0","lbl_1","inner1_1","inner1_2","inner1_3","lbl_3","inner2_1","inner2_2","inner2_3","lbl_3","inner3_1","inner3_2","inner4_1","inner4_2","inner5_1","inner5_2","inner5_3","inner5_4","lbl_6","inner6_1","lbl_8"];
var innerAniAry_long = ["lbl_0","lbl_1","inner1_1","inner1_2","inner1_3","lbl_3","inner2_1","inner2_2","inner2_3","lbl_3","inner3_1","inner3_2","inner4_1","inner4_2","inner5_1","inner5_2","inner5_3","inner5_4","lbl_6","inner6_1","lbl_8","lbl_10","lbl_11"];

function setup(){
	$(window).scrollTop(0);
	if(!isSimpleVersion){
		prepare_page_0_animation();
		prepare_page_1_animation();
		prepare_page_2_animation();
		prepare_page_3_animation();
		prepare_page_4_animation();
		prepare_page_5_animation();
		prepare_page_6_animation();
		prepare_page_7_animation();
		prepare_page_8_animation();
		prepare_page_9_animation();
		prepare_page_10_animation();
		prepare_page_11_animation();
		main_timeline.stop();
	}

	var rnsi = new randowShowIcon();
	rnsi.init();
}

function prepare_page_0_animation(){
	main_timeline.addLabel("lbl_0");
	var tl = new TimelineMax();
	

	
	var page0        = {myProp:0,elm:$(".page_0")};
	var page0_moveup = TweenMax.to(page0,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page0], immediateRender: true});

	var page0_title = TweenLite.to($(".page_0 h2"),1,{top:-100, delay:-0.5, opacity: 0, ease:"Quad.easeOut"});
	var page0_desc = TweenLite.to($(".page_0 .desc"),4,{top:-220, delay:-0.5, opacity: 0,ease:"Quad.easeOut"});
	
	var page_number = TweenLite.from($(".page_1 h2"),2,{left:-800, delay:1,autoAlpha:0,ease:"Quad.easeOut"});

	var page1             = {myProp:0,elm:$(".page_1"),reverse:1,po:page0.elm};
	var page1_setVisibile = TweenMax.to(page1.elm,0.1,{"opacity":"1"});
	var page1_moveup      = TweenMax.to(page1,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page1], immediateRender: true});

	var page1_heder_ani = TweenLite.from($(".page_1 .slide1 header h3"),2,{bottom:-800,autoAlpha:0, delay:1,ease:"Quad.easeOut"});
	var page1_desc_ani  = TweenLite.from($(".page_1 .slide1 .desc"),5,{top:800,autoAlpha:0, delay:1,ease:"Quad.easeOut"});

	tl.add(
		[
			page0_moveup,
			page1_moveup,
			page0_title,
			page0_desc,
			page_number,
			page1_setVisibile,
			page1_heder_ani,
			page1_desc_ani
		]
	);

	main_timeline.add(tl,"lbl_1");
}

function prepare_page_1_animation(){
	var tl = new TimelineMax();

	var page1_circle_wrap_ani  = TweenLite.from($(".page_1 .slide1 .circle"),8,{autoAlpha:0,delay:1});
	var page1_circle_part1_ani = TweenLite.from($(".page_1 .slide1 .circle .actor1"),8,{rotation:"30_cw",transformOrigin:"50% 50%", ease:"Quad.easeOut",delay:4});
	var page1_circle_part2_ani = TweenLite.from($(".page_1 .slide1 .circle .actor2"),8,{rotation:"60_cw",transformOrigin:"50% 50%", ease:"Quad.easeOut",delay:4});
	var page1_circle_part3_ani = TweenLite.from($(".page_1 .slide1 .circle .actor3"),8,{rotation:"-40_ccw",transformOrigin:"50% 50%", ease:"Quad.easeOut",delay:4});
	main_timeline.add(
		[
			page1_circle_wrap_ani,
			page1_circle_part1_ani,
			page1_circle_part2_ani,
			page1_circle_part3_ani
		],"lbl_1-=1"
	);

	main_timeline.addLabel("lbl_2");
	//page 0 invisible
	var page0_setVisibile = TweenMax.to($(".page_0"),0.1,{"opacity":"0"});
	main_timeline.add([page0_setVisibile]);

	main_timeline.addLabel("inner1_1");
	//change from slide 1 to slide 2
	var slide1_out       = TweenMax.to($(".page_1 .slide1"),2.5,{autoAlpha:0,ease:"Quad.easeOut", left:-1200});
	var slide2_in        = TweenMax.fromTo($(".page_1 .slide2"),2.5,{autoAlpha:0,ease:"Quad.easeOut", left:1200},{autoAlpha:1,ease:"Quad.easeOut", left:0});
	
	main_timeline.add(
		[
			slide1_out,
			slide2_in
		]
	);


	//slide 2 animation
	var slide2_title_title = TweenLite.from($(".page_1 .slide2 h3"),2.5,{left:1700,ease:"Quad.easeOut"});
	var slide2_title_ani = TweenLite.from($(".page_1 .slide2 .desc"),3.5,{left:1700,ease:"Quad.easeOut"});
	var slide2_chart_wrap_ani  = TweenLite.from($(".page_1 .slide2 .chart"),1,{autoAlpha:0,ease:"Quad.easeOut"});
	var slide2_chart_part1_ani = TweenLite.from($(".page_1 .slide2 .chart .actor1"),2,{bottom:"-333px",ease:"Quad.easeOut", delay:1.5});
	var slide2_chart_part2_ani = TweenLite.from($(".page_1 .slide2 .chart .actor2"),2,{bottom:"-174px", ease:"Quad.easeOut", delay:2.8});
	var slide2_chart_part3_ani = TweenLite.from($(".page_1 .slide2 .chart .actor3, .page_1 .slide2 .chart .actor4"),3,{autoAlpha:0, ease:"Quad.easeOut", delay:4.5});
	main_timeline.add(
		[
			slide2_title_ani,
			slide2_title_title,
			slide2_chart_wrap_ani,
			slide2_chart_part1_ani,
			slide2_chart_part2_ani,
			slide2_chart_part3_ani
		]
	);

	main_timeline.addLabel("inner1_2");
	//change from slide 2 to slide 3
	var slide2_out       = TweenMax.to($(".page_1 .slide2"),2,{autoAlpha:0, left:-1200});
	var slide3_in        = TweenMax.fromTo($(".page_1 .slide3"),2,{autoAlpha:0, left:1200},{autoAlpha:1, left:0});
	main_timeline.add(
		[
			slide2_out,
			slide3_in
		]
	);


	//slide 3 animation
	var slide3_barChart_wrap_ani  = TweenLite.from($(".page_1 .slide3 .chart"),1,{autoAlpha:0});
	var slide3_title_title = TweenLite.from($(".page_1 .slide3 h3"),2,{opacity:0,left:1700, ease:"Quad.easeOut"});
	var slide3_title_ani = TweenLite.from($(".page_1 .slide3 .desc"),2,{opacity:0,left:500, delay:1, ease:"Quad.easeOut"});
	var slide3_barChart_part1_ani = TweenLite.from($(".page_1 .slide3 .chart .actor1"),1,{bottom:"-333px", delay:1.5, ease:"Quad.easeOut"});
	var slide3_barChart_part2_ani = TweenLite.from($(".page_1 .slide3 .chart .actor2"),3.5,{bottom:"124px", delay:1.5, ease:"Quad.easeOut"});
	var slide3_barChart_part3_ani = TweenLite.from($(".page_1 .slide3 .chart .actor3"),3,{autoAlpha:0, delay:5});
	main_timeline.add(
		[
			slide3_barChart_wrap_ani,
			slide3_title_title,
			slide3_title_ani,
			slide3_barChart_part1_ani,
			slide3_barChart_part2_ani,
			slide3_barChart_part3_ani
		]
	);
	main_timeline.addLabel("inner1_3");


	//go to next page
	var page1             = {myProp:0,elm:$(".page_1")};
	var page1_moveup      = TweenMax.to(page1,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page1], immediateRender: true});
	var page2             = {myProp:0,elm:$(".page_2"),reverse:1,po:page1.elm};
	var page2_setVisibile = TweenMax.to(page2.elm,0.1,{"opacity":"1"});
	var page2_moveup      = TweenMax.to(page2,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page2], immediateRender: true});
	var page2_title       = TweenMax.from($(".page_2 h2"),3,{bottom: "-=900", opacity:0, ease:"Quad.easeOut"});

	main_timeline.add(
		[
			page1_moveup,
			page2_moveup,
			page2_setVisibile,
			page2_title
		]
	);
}

function prepare_page_2_animation(){
	var tl = new TimelineMax();

    //page 1 invisible
	var page1_setInvisible = TweenMax.to($(".page_1"),0.1,{"opacity":"0"});
	main_timeline.add(page1_setInvisible);
	//main_timeline.addLabel("inner2_1");

	$(".page_2 .slide1 img").css("opacity",1);

	//page 2 animation
    var step_1 = TweenMax.from($(".page_2 .slide1 .actor1"),2,{opacity:0, left: "-=100", delay:0, ease:"Quad.easeOut"});
    var step_2 = TweenMax.from($(".page_2 .slide1 .actor2"),2.5,{opacity:0, left: "-=10", delay:1, ease:"Quad.easeOut"});
    var step_3 = TweenMax.from($(".page_2 .slide1 .actor3"),3,{opacity:0, ease:"Quad.easeOut", delay:2.5});
    var step_4 = TweenMax.from($(".page_2 .slide1 .actor4"),4.5,{opacity:0, left: "-=50", delay:2, ease:"Quad.easeOut"});
    var step_5 = TweenMax.from($(".page_2 .slide1 .actor5"),5,{opacity:0, delay:0, ease:"Quad.easeOut", delay:3.5});
    var step_6 = TweenMax.from($(".page_2 .slide1 .actor6"),5.5,{opacity:0, left: "-=50", delay:3, ease:"Quad.easeOut"});
    var step_7 = TweenMax.from($(".page_2 .slide1 .actor7"),6,{opacity:0, delay:0, ease:"Quad.easeOut", delay:5.5});
    main_timeline.add(
		[
			step_1,
			step_2,
			step_3,
			step_4,
			step_5,
			step_6,
			step_7
		]
	);

    main_timeline.addLabel("lbl_3");


	//change from slide 1 to slide 2
	var slide1_out = TweenMax.to($(".page_2 .slide1"),2,{autoAlpha:0, left:-1200, ease:"Quad.easeOut"});
	var slide2_in  = TweenMax.fromTo($(".page_2 .slide2"),2,{autoAlpha:0, left:1200, ease:"Quad.easeOut"},{autoAlpha:1, left:0, ease:"Quad.easeOut"});
    main_timeline.add(
		[
			slide1_out,
			slide2_in
		]
	);
	main_timeline.from($(".page_2 .slide2 .desc1"),2,{left:1200, opacity:0, ease:"Quad.easeOut"});
	main_timeline.from($(".page_2 .slide2 .desc2"),2,{left:1200, opacity:0, ease:"Quad.easeOut", delay: -1.5});
    main_timeline.addLabel("inner2_3");

	//go to next page
	var page2 = {myProp:0,elm:$(".page_2")};
    main_timeline.to($(".page_3"),0.1,{"opacity":"1"});//set page3 visible
    main_timeline.to(page2,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page2], immediateRender: true});


    main_timeline.addLabel("inner3_1");
}

function prepare_page_3_animation(){
	var tl = new TimelineMax();

	//page 2 invisible
	var page2_setInvisible = TweenMax.to($(".page_2"),0.1,{"opacity":"0"});
	tl.add(page2_setInvisible);



	//go to next page
	tl.to($(".page_4"),0.1,{"opacity":"1"});//set page4 visible
	var page_3            = {myProp:0,elm:$(".page_3")};
	var page_3_moveup     = TweenMax.to(page_3,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page_3], immediateRender: true});
	var page_3_header_ani = TweenMax.to($(".page_3 h2"),1,{left:-500, ease:"Quad.easeOut"});
	var page_3_desc_ani   = TweenMax.to($(".page_3 .desc"),2.5,{left:"+=1000px", ease:"Quad.easeOut"});
	var page_4_number_ani = TweenMax.from($(".page_4 h2 img:nth-child(2)"),2.5,{left:-300,"opacity":0,delay:2, ease:"Quad.easeOut"});
	var page_4_title_ani  = TweenMax.from($(".page_4 .animiationDiv > img"),2.5,{right:-300,"opacity":0,delay:2, ease:"Quad.easeOut"});

	var page4_flag_ani = TweenMax.to($(".page_4 #flag div, .page_4 #flag_line div"),3,{height:400,delay:2, ease:"Quad.easeOut"});
	var page4_flagline_ani = TweenMax.to($(".page_4 #flag_line div"),0.5,{opacity:0,delay:5, ease:"Quad.easeOut"});

	tl.add(
		[
			page_3_moveup,
			page_3_header_ani,
			page_3_desc_ani,
			page_4_number_ani,
			page_4_title_ani,
			page4_flag_ani,
			page4_flagline_ani
		]
	);

	main_timeline.add(tl,"lbl_4");
    main_timeline.add(tl,"inner3_2");

}

function prepare_page_4_animation(){

	var tl = new TimelineMax();

	//page 3 invisible
	var page_3_setInvisible = TweenMax.to($(".page_3"),0.1,{"opacity":"0", ease:"Quad.easeOut"});
	main_timeline.add(page_3_setInvisible);


	//perpare for page 5
	// FIXIT
	tl.to($(".page_5 .slide3"),0.1,{rotation:"200_cw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});

    main_timeline.addLabel("inner4_1");
	//page 4 animation
	// main_timeline.to($(".page_4 #flag div, .page_4 #flag_line div"),3,{height:400});
    main_timeline.addLabel("lbl_5");


    main_timeline.addLabel("inner4_2");
	//go to next page
	var page4             = {myProp:0,elm:$(".page_4")};
	var page4_moveup      = TweenMax.to(page4,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page4], immediateRender: true});
	var page_4_number_ani = TweenMax.to($(".page_4 h2 img:nth-child(2)"),2.5,{left:900,"opacity":0, ease:"Quad.easeOut"});
	var page_4_title_ani  = TweenMax.to($(".page_4 .animiationDiv > img"),3,{right:900,"opacity":0, ease:"Quad.easeOut"});
	var page5             = {myProp:0,elm:$(".page_5"),reverse:1,po:page4.elm};
	var page5_setVisible  = TweenMax.to(page5.elm,0.1,{"opacity":"1", ease:"Quad.easeOut"});
	var page5_moveup      = TweenMax.to(page5,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page5], immediateRender: true});
    main_timeline.add(
		[
			page4_moveup,
			page_4_number_ani,
			page_4_title_ani,
			page5_moveup,
			page5_setVisible
		]
	);


}

function prepare_page_5_animation(){
	var tl = new TimelineMax();

	//page 4 invisible
	var page4_setInvisible = TweenMax.to($(".page_4"),0.1,{"opacity":"0", ease:"Quad.easeOut"});
    main_timeline.add(page4_setInvisible);


    main_timeline.addLabel("lbl_6");
	//page 5 animation
	//first round
	var step1_out    = TweenLite.to($(".page_5 .slide1"),3,{rotation:"200_ccw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});
	var step2_in     = TweenLite.from($(".page_5 .slide2"),3,{rotation:"161_cw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});
	var step3_ready  = TweenLite.to($(".page_5 .slide3"),3,{rotation:"161_ccw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});
	var background_1 = TweenLite.to($(".page_5"),3,{backgroundColor:"rgba(99, 181, 223,1)", ease:"Quad.easeOut"});
	main_timeline.add(
		[
			step1_out,
			step2_in,
			step3_ready,
			background_1
		]
	);

    main_timeline.addLabel("inner5_1");

	var step1_ready = TweenLite.to($(".page_5 .slide1"),3,{rotation:"200_ccw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});
    main_timeline.add([step1_ready]);


	var step2_out    = TweenLite.to($(".page_5 .slide2"),3,{rotation:"200_ccw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});
	var background_2 = TweenLite.to($(".page_5"),3,{backgroundColor:"rgba(96, 197, 165,1)"});
	var step3_in     = TweenLite.from($(".page_5 .slide3"),3,{rotation:"161_cw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});
    main_timeline.add(
		[
			step2_out,
			step3_in,
			background_2
		]
	);

    main_timeline.addLabel("inner5_2");


	var step3_out     = TweenLite.to($(".page_5 .slide3"),3,{rotation:"200_ccw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});
	var step4_in      = TweenLite.from($(".page_5 .slide4"),3,{rotation:"161_cw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});
	var step1_ready_a = TweenLite.to($(".page_5 .slide1"),3,{rotation:"161_ccw", transformOrigin:"50% 100%", ease:"Quad.easeOut"});
	var background_3  = TweenLite.to($(".page_5"),3,{backgroundColor:"rgba(143, 118, 193,1)"});
    main_timeline.add(
		[
			step3_out,
			step4_in,
			step1_ready_a,
			background_3
		]
	);
    main_timeline.addLabel("inner5_3");

	//go to next page
	var page5            = {myProp:0,elm:$(".page_5")};
	var page5_moveup     = TweenMax.to(page5,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page5], immediateRender: true});
	var page6            = {myProp:0,elm:$(".page_6"),reverse:1,po:page5.elm};
	var page6_setVisible = TweenMax.to(page6.elm,0.1,{"opacity":"1"});
	var page6_moveup     = TweenMax.to(page6,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page6], immediateRender: true});

	var page6_box1_ani = TweenMax.from($(".page_6 .list_box1"),3,{"opacity":"0", left:540,delay:1, ease:"Quad.easeOut"});
	var page6_box2_ani = TweenMax.from($(".page_6 .list_box2"),3,{"opacity":"0", left:540,delay:1.3, ease:"Quad.easeOut"});
	var page6_box3_ani = TweenMax.from($(".page_6 .list_box3"),3,{"opacity":"0", left:540,delay:1.6, ease:"Quad.easeOut"});
	var page6_box4_ani = TweenMax.from($(".page_6 .list_box4"),3,{"opacity":"0", left:540,delay:1.9, ease:"Quad.easeOut"});

    main_timeline.add(
		[
			page5_moveup,
			page6_moveup,
			page6_setVisible,
			page6_box1_ani,
			page6_box2_ani,
			page6_box3_ani,
			page6_box4_ani
		]
	);
    main_timeline.addLabel("inner5_4");


}
function prepare_page_6_animation(){
	var tl = new TimelineMax();

	main_timeline.addLabel("lbl_7");
	//page 5 invisible
	var page5_setInvisible = TweenMax.to($(".page_5"),0.1,{"opacity":"0"});
	main_timeline.add(page5_setInvisible);

	//go to next page
	// FIXIT
	tl.to($(".page_7"),0.1,{"opacity":"1"});
	var page7          = {myProp:0,elm:$(".page_6")};
	var page7_moveup   = TweenMax.to(page7,8,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page7], immediateRender: true});
	var page7_img1_ani = TweenMax.from($(".page_7 .animiationDiv img:nth-child(1)"),2,{"opacity":"0", left:-205,delay:3, ease:"Quad.easeOut"});
	var page7_img2_ani = TweenMax.from($(".page_7 .animiationDiv img:nth-child(2)"),2,{"opacity":"0", left:205,delay:3, ease:"Quad.easeOut"});
	tl.add(
		[
			page7_moveup,
			page7_img1_ani,
			page7_img2_ani
		]
	);

	main_timeline.add(tl,"lbl_7");
}
function prepare_page_7_animation(){
	var tl = new TimelineMax();

	//page 6 invisible
	var page6_setInvisible = TweenMax.to($(".page_6"),0.1,{"opacity":"0"});
	tl.add(page6_setInvisible);

	//go to next page
	var page7                 = {myProp:0,elm:$(".page_7")};
	var page7_moveup          = TweenMax.to(page7,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page7], immediateRender: true});
	var page8                 = {myProp:0,elm:$(".page_8"),reverse:1,po:page7.elm};
	var page8_setVisible      = TweenMax.to(page8.elm,0.1,{"opacity":"1"});
	var page8_pathImg_trigger = TweenMax.to(page8.elm,2.5,{"opacity":"1",onComplete:page8Extend});
	var page8_moveup          = TweenMax.to(page8,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page8], immediateRender: true});
	tl.add(
		[
			page7_moveup,
			page8_moveup,
			page8_setVisible,
			page8_pathImg_trigger
		]
	);

	main_timeline.add(tl,"lbl_8");
}
function prepare_page_8_animation(){
	var tl = new TimelineMax();

	//page 7 invisible
	var page7_setInvisible = TweenMax.to($(".page_7"),0.1,{"opacity":"0"});
	tl.add(page7_setInvisible);

	//go to next page
	var page8            = {myProp:0,elm:$(".page_8")};
	var page8_moveup     = TweenMax.to(page8,9,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page8], immediateRender: true});
	var page9            = {myProp:0,elm:$(".page_9"),reverse:1,po:$(".page_8")};
	var page9_setVisible = TweenMax.to(page9.elm,0.1,{"opacity":"1"});
	var page9_moveup     = TweenMax.to(page9,9,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page9], immediateRender: true});
	var page9_title      = TweenMax.from($(".page_9 h2"),4,{top: "+=600", opacity: 0, ease:"Quad.easeOut", delay: 5});
	var page9_clientLogo = TweenMax.from($(".page_9 .animiationDiv img"),4,{top: "+=600", opacity: 0, ease:"Quad.easeOut", delay: 6});
	tl.add(
		[
			page8_moveup,
			page9_moveup,
			page9_setVisible,
			page9_title,
			page9_clientLogo
		]
	);

	main_timeline.add(tl,"lbl_9");
}
function prepare_page_9_animation(){
	var tl = new TimelineMax();

	//page 8 invisible
	var page8_setInvisible = TweenMax.to($(".page_8"),0.1,{"opacity":"0"});
	tl.add(page8_setInvisible);

	//go to next page
	var page9             = {myProp:0,elm:$(".page_9")};
	var page9_moveup      = TweenMax.to(page9,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page9], immediateRender: true});
	var page10            = {myProp:0,elm:$(".page_10"),reverse:1,po:page9.elm};
	var page10_setVisible = TweenMax.to(page10.elm,0.1,{"opacity":"1"});
	var page10_moveup     = TweenMax.to(page10,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page10], immediateRender: true});
	var page10_title      = TweenMax.from($(".page_10 h2"),3,{top: "+=600", opacity: 0, ease:"Quad.easeOut", delay: 1});
	var page10_logo		  = TweenMax.from($(".page_10 .animiationDiv"),3,{top: "+=400", opacity: 0, ease:"Quad.easeOut", delay: 2});
	var page10_desc1	  = TweenMax.from($(".page_10 .desc1"),3,{top: "+=400", opacity: 0, ease:"Quad.easeOut", delay: 3});
	var page10_desc2	  = TweenMax.from($(".page_10 .desc2"),3,{top: "+=400", opacity: 0, ease:"Quad.easeOut", delay: 4});
	tl.add(
		[
			page9_moveup,
			page10_moveup,
			page10_setVisible,
			page10_title,
			page10_logo,
			page10_desc1,
			page10_desc2 
		]
	);

	main_timeline.add(tl,"lbl_10");
}
function prepare_page_10_animation(){
	var tl = new TimelineMax();

	//page 9 invisible
	var page9_setInvisible = TweenMax.to($(".page_9"),0.1,{"opacity":"0"});
	tl.add(page9_setInvisible);

	//go to next page
	var page10            = {myProp:0,elm:$(".page_10")};
	var page10_moveup     = TweenMax.to(page10,7,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page10], immediateRender: true});
	var page11            = {myProp:0,elm:$(".page_11"),reverse:1,po:page10.elm};
	var page11_setVisible = TweenMax.to(page11.elm,0.1,{"opacity":"1"});
	var page11_moveup     = TweenMax.to(page11,7,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page11], immediateRender: true});
	var page11_title      = TweenMax.from($(".page_11 h2"),3,{top: "+=400", opacity: 0, ease:"Quad.easeOut", delay: 1});
	var page11_desc		  = TweenMax.from($(".page_11 .desc"),3,{top: "+=400", opacity: 0, ease:"Quad.easeOut", delay: 2});
	var page11_from	  = TweenMax.from($(".page_11 #contact_form"),3,{top: "+=400", opacity: 0, ease:"Quad.easeOut", delay: 3});
	tl.add(
		[
			page10_moveup,
			page11_moveup,
			page11_setVisible,
			page11_title,
			page11_desc,
			page11_from
		]
	);

	main_timeline.add(tl,"lbl_11");
}
function prepare_page_11_animation(){
	var tl = new TimelineMax();

	// main_timeline.addLabel("lbl_12");

	//page 10 invisible
	var page10_setInvisible = TweenMax.to($(".page_10"),0.1,{"opacity":"0"});
	tl.add(page10_setInvisible);

	var page11 = {myProp:0,elm:$(".page_11"),last:1};
	tl.to(page11,5,{myProp:100,onUpdate :onUpdateFn,onUpdateParams:[page11], immediateRender: true});

	main_timeline.add(tl,"lbl_12");
}

function onUpdateFn(obj){
	if(obj.reverse == 1){
		if(String(obj.po) == "undefined"){
			var screenHeight = ($(window).height() > 700 )? $(window).height() : 700;
			var dist         = obj.myProp * screenHeight / 100;

			dist = $(window).height() - dist;

			obj.elm.css("top",dist);

			return;
		}

		var prevPageOffsetTop = obj.myProp * obj.po.height() / 100;

		if(obj.po.height() - prevPageOffsetTop > $(window).height()){
			return;
		}

		var newTopPx = Math.abs(obj.po.height() - prevPageOffsetTop);

		obj.elm.css("top",newTopPx);
		return;
	}

	if(obj.last == 1){
		if($(window).height() >= obj.elm.height()){
			return;
		}
		var offset = obj.myProp * obj.elm.height() / 100;

		if($(window).height()+offset > obj.elm.height()){
			var targetTop = $(window).height() - obj.elm.height();

			obj.elm.css("top", targetTop);

			return;
		}
	}

	obj.elm.css("top",obj.myProp * obj.elm.height() / 100 * -1);
}

function page8Extend(){
	TweenMax.to($(".page_8 .animiationDiv"),3,{"height": 1320});
}

function randowShowIcon(){
	this.target_ary      = [".target_1",".target_2",".target_3",".target_4"];
	this.currentShow_ary = [0, 0, 0, 0];
	this.timer           = null;
	this.totalImg        = 12;
	_randowShow          = this;//global variable!!!

	this.init = function(){
		for(var i = 0; i < this.target_ary.length; i++){
			var randomClass = this.pickRanNum();

			// reset
			this.resetClass($(this.target_ary[i]).find(".front"));
			this.resetClass($(this.target_ary[i]).find(".back"));

			if(isSimpleVersion){
				$(this.target_ary[i]).find(".back").css("display","none");
			}else{
				TweenLite.set($(this.target_ary[i]).find(".back"),{opacity:0});
			}

			$(this.target_ary[i]).find(".front").addClass("p"+randomClass);
			$(this.target_ary[i]).find(".name").addClass("p"+randomClass);

			this.currentShow_ary[i] = randomClass;
		}

		this.timer = setTimeout(function(){
			_randowShow.changeImg();
		},800);
	};
	this.pickRanNum = function(){
		// console.log(this.currentShow_ary);
		var newRan = this.currentShow_ary[0];

		// console.log($.inArray(9,this.currentShow_ary));
		while ($.inArray(newRan,this.currentShow_ary) >= 0)
		{
			newRan = Math.floor((Math.random()*this.totalImg)+1);
		}

		// console.log(newRan);	
		return newRan;
	};
	this.changeImg = function(){
		var randomClass = this.pickRanNum();
		var target      = Math.floor((Math.random()*this.target_ary.length));
		var front       = $(this.target_ary[target]).find(".front");
		var back        = $(this.target_ary[target]).find(".back");
		var yellowBk	= $(this.target_ary[target]).find(".yellowBk");

		// reset
		this.resetClass(back);
		this.resetClass($(this.target_ary[target]).find(".name"));

		$(this.target_ary[target]).find(".back").addClass("p"+randomClass);
		$(this.target_ary[target]).find(".name").addClass("p"+randomClass);

		this.currentShow_ary[target] = randomClass;

		if(isSimpleVersion){
			front.fadeOut("slow",function(){
				$(this).removeClass("front").addClass("back");

				// reset
				_randowShow.resetClass($(this));
			});

			back.fadeIn("slow").removeClass("back").addClass("front");
		}
		else{
			var tl = new TimelineMax();
			var front_out = TweenMax.fromTo(front, 1.5, {css:{scaleX:1,scaleY:1,opacity:1}, ease:Power3.easeOut},{css:{scaleX:0.1,scaleY:0.1,opacity:0}, ease:Power3.easeOut,onComplete:function(className,obj,fun){fun(obj); obj.addClass(className);}, onCompleteParams:["p"+randomClass, front,this.resetClass]});
			var yellowBk_out = TweenMax.fromTo(yellowBk, 1, {css:{scaleX:1,scaleY:1,opacity:1}, ease:Power3.easeOut},{css:{scaleX:0.1,scaleY:0.1,opacity:0}, ease:Power3.easeOut,delay:0.2});
			var back_in = TweenMax.fromTo(back, 1.5, {css:{scaleX:0.1,scaleY:0.1,opacity:0}, ease:Power3.easeOut},{css:{scaleX:1,scaleY:1,opacity:1}, ease:Power3.easeOut});
			var yellowBk_in = TweenMax.to(yellowBk, 1.5, {css:{scaleX:1,scaleY:1,opacity:1}, ease:Power3.easeOut,delay:0.5});
			tl.add([front_out,back_in,yellowBk_out,yellowBk_in]);
			// tl.to(yellowBk, 1, {css:{scaleX:1,scaleY:1,opacity:1}, ease:Power3.easeOut});
			// var frontAni = TweenLite.to(front, 1, {css:{scaleX:0.3,scaleY:0.3,opacity:0}, ease:Power3.easeOut});
			// var backAni = TweenLite.fromTo(back, 1, {css:{scaleX:0.3,scaleY:0.3,opacity:0}, ease:Power3.easeOut},{css:{scaleX:1,scaleY:1,opacity:1}, ease:Power3.easeOut});
		}

		//timeout
		this.timer = setTimeout(function(){
			_randowShow.changeImg();
		},2500);
	};
	this.resetClass = function(elm){
		elm.removeClass("p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12");
	};

}

$.fn.pngFix = function() { if (!$.browser.msie || $.browser.version >= 9) { return $(this); }   return $(this).each(function() { var img = $(this),         src = img.attr('src');  var _src = String(src); var lastDotPos = _src.lastIndexOf("."); if(_src.substring(lastDotPos+1).toUpperCase() != "PNG"){ return;}  img.attr('src', 'images/trans.gif')         .css('filter', "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='" + src + "')");alert(img.attr('src'));   }); };

function reCal(){
	$("section > .slide").each(function(){
		var clientHeight = $(window).height();
		var elmHeight    = $(this).height();

		if(elmHeight >= clientHeight){
			return;
		}

		$(this).css("height","100%");
	});
}

function Stepper(distance, timeline){
	_stepper = this;
	this.stepNum = 0;
	this.myTimeLine = timeline;
	this.duration = timeline.duration();
	this.distance = distance;
	this.stepSize = this.duration/this.distance;
	this.touchStartPoint = 0;
	this.myTimeLine.seek(0);

	$(document).ready(function() {

       $(window).bind('mousewheel', function(event, delta) {
			event.preventDefault();
			var currLabel = main_timeline.currentLabel();
			var nextLabel = main_timeline.getLabelAfter();
            var prevtLabel = main_timeline.getLabelBefore();

            var innerAniAry = innerAniAry_short;

            
            if($(window).height() >= 820){
				innerAniAry = innerAniAry_long;
            }

            var isGoForward = delta < 0;
            var isMeetScroll = Math.abs(delta) > 0.5;

            var onInnerSection = null;

            if(isGoForward){
                onInnerSection = $.inArray(currLabel,innerAniAry) != -1;
                // console.log(onInnerSection,currLabel);
                if(onInnerSection){
                    if(!isMeetScroll){
                        return;
                    }
                    goForward();
                }else{
                    _stepper.walk(delta * -1);
                }
            }else{
				onInnerSection = $.inArray(prevtLabel,innerAniAry) != -1;

                if(onInnerSection){
                    if(!isMeetScroll){
                        return;
                    }
                    goBackward();
                }else{
                    _stepper.walk(delta * -1);
                }
            }

		});

		$(window).bind('orientationchange resize', function(){
			reCal();
		});

	});

	this.walk = function(step){
		var direction = null;
		if(this.stepNum>this.stepNum + step){
			direction = "up";
		}else{
			direction = "down";
		}
		//reset the scale to 0, the animation speed increased when call directTo()
		this.myTimeLine.timeScale(0);
		this.stepNum += step;

		if(this.stepNum<=0){
			this.stepNum = 0;
		}
		if(this.stepNum >= this.distance){
			this.stepNum = this.distance;
		}

		var s = this.stepSize * this.stepNum;
		// this.myTimeLine.seek(s,false);
		tryAniTo(s,direction);
	};

	this.directTo = function(label){
		this.myTimeLine.timeScale(35);
		this.myTimeLine.tweenTo(label,{ease:"Circ.easeOut"});
		this.stepNum = (this.myTimeLine.getLabelTime(label) / this.duration) * this.distance;
	};

	this.getCurrentLabel = function(){
		var str = String(this.myTimeLine.currentLabel());
		return this.myTimeLine.currentLabel();
	};
}

function goForward(){
	var currLabel = main_timeline.currentLabel();
	var afterLbl = main_timeline.getLabelAfter();

	main_timeline.timeScale(5);
	main_timeline.tweenTo(afterLbl);

    var t = main_timeline.getLabelTime(afterLbl);
    var n = main_timeline.getLabelAfter(t);

	_stepper.stepNum = (( main_timeline.getLabelTime(afterLbl) / _stepper.duration)) * _stepper.distance;
}
function goBackward(){
	var currLabel = main_timeline.currentLabel();
	var beforeLbl = main_timeline.getLabelBefore();

	main_timeline.timeScale(5);
	main_timeline.tweenTo(beforeLbl);

    _stepper.stepNum = (( main_timeline.getLabelTime(beforeLbl) / _stepper.duration)) * _stepper.distance;

}

function getTimeLineCurrentLabel(){
	label_ary = [];//global variable

	for(var i = 1; i < 13; i++){
		var t = main_timeline.getLabelTime("lbl_"+i);
		label_ary.push(t);
	}
	// console.log(label_ary);

	for(var s = 0; s < label_ary.length; s++){
		var currSec = main_timeline.time();
		var after   = currSec >= label_ary[s];
		var before  = currSec < label_ary[s+1];
		var last	= currSec >= label_ary[label_ary.length-1];

		if(last){
			// console.log("lbl_" + (label_ary.length-1));
			return "lbl_" + (label_ary.length-1);
		}

		if(after && before){
			// console.log("if: " + currSec);
			return "lbl_" + (s);
		}
		
	}
}