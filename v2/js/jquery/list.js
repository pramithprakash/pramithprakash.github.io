function SectionIndication(tag){
	this.mSection_ary = [];
	this.curActiveSection = 1;

	$(window).bind("scroll",function(){
		var currentTop = $(window).scrollTop();
		wathcingSection = sectionCtl.getCurrentSection(currentTop);
	});

	this.initAry = function (){
		// alert("init");
		var totalElm = $(tag).length;
		
		that         = this;
		that.mSection_ary = [];
		for(var i = 0; i < totalElm; i++)
		{

			// that.mSection_ary[i] = $($(tag)[i]).offset().top - 51;
			var prevHeight = (that.mSection_ary[i-1] > 0) ? that.mSection_ary[i-1] : 0;
			if(i==0){
				that.mSection_ary[i] =  - 51 + prevHeight;
				continue;
			}
			that.mSection_ary[i] = $($(tag)[i-1]).outerHeight(true) - 50 + prevHeight;
		}
		// console.log(that.mSection_ary);
	};

	this.getCurrentSection = function (curPos){
		curPos = parseInt(curPos,10) + 50;//the line need to determine watching section or not, form top to section 

		that           = this;
		var menuHeight =  parseInt($("#menu").outerHeight(),10);

		for(var i = 0; i < that.mSection_ary.length; i++)
		{
			var prev = that.mSection_ary[i];
			var next = that.mSection_ary[i+1];

			next -= (next) > menuHeight ? menuHeight : 0;
			prev -= (prev) > menuHeight ? menuHeight : 0;

			//calulate the max height for last section
			if(i == that.mSection_ary.length-1)
			{
				next = Math.pow(2, 16) -1;
			}

			if((curPos>=prev && curPos <= next ) )
			{
				// console.log(i,curPos);
				return i;
			}

		}
	};

	this.activateMenuItem = function(num_id, isCallFromSlider){
		if(this.curActiveSection == num_id || isCallFromSlider == "undefined")
			return;

		this.curActiveSection = num_id;

		$("#nav li").removeClass("active");
		$("#nav_"+num_id).addClass("active");
	};
}

