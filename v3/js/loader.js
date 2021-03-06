var QueryLoader = {
	overlay: "",
	loadBar: "",
	preloader: "",
	items: new Array(),
	doneStatus: 0,
	doneNow: 0,
	selectorPreload: "body",
	ieLoadFixTime: 2000,
	ieTimeout: "",
	init: function() {
		if (navigator.userAgent.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/) == "MSIE 6.0,6.0") {
			return false;
		}
		if (QueryLoader.selectorPreload == "body") {
			QueryLoader.spawnLoader();
			QueryLoader.getImages(QueryLoader.selectorPreload);
			QueryLoader.createPreloading();
		} else {
			$(document).ready(function() {
				QueryLoader.spawnLoader();
				QueryLoader.getImages(QueryLoader.selectorPreload);
				QueryLoader.createPreloading();
			});
		}
		QueryLoader.ieTimeout = setTimeout("QueryLoader.ieLoadFix()", QueryLoader.ieLoadFixTime);
	},
	ieLoadFix: function() {
		var ie = navigator.userAgent.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/);
		if (ie && ie[0].match("MSIE")) {
			while ((100 / QueryLoader.doneStatus) * QueryLoader.doneNow < 100) {
				QueryLoader.imgCallback();
			}
		}
	},
	imgCallback: function() {
		QueryLoader.doneNow++;
		QueryLoader.animateLoader();
	},
	getImages: function(selector) {
		var everything = $(selector).find("*:not(script)").not('#captchaimg').each(function() {
			var url = "";
			if ($(this).css("background-image") != "none") {
				var url = $(this).css("background-image");
			} else if (typeof($(this).attr("src")) != "undefined" && $(this).attr("tagName").toLowerCase() == "img") {
				var url = $(this).attr("src");
			}
			url = url.replace("url(\"", "");
			url = url.replace("url(", "");
			url = url.replace("\")", "");
			url = url.replace(")", "");
			if (url.length > 0) {
				QueryLoader.items.push(url);
			}
		});
	},
	createPreloading: function() {
		QueryLoader.preloader = $("<div id='preload_div'></div>").appendTo(QueryLoader.selectorPreload);
		$(QueryLoader.preloader).css({
			height: "0px",
			width: "0px",
			overflow: "hidden",
			background: '#000'
		});
		var length = QueryLoader.items.length;
		QueryLoader.doneStatus = length;
		for (var i = 0; i < length; i++) {
			var imgLoad = $("<img></img>");
			$(imgLoad).attr("src", QueryLoader.items[i]);
			$(imgLoad).unbind("load");
			$(imgLoad).bind("load", function() {
				QueryLoader.imgCallback();
			});
			$(imgLoad).appendTo($(QueryLoader.preloader));
		}
		$("#preloader_overlay").fadeOut();
	},
	spawnLoader: function() {
		if (QueryLoader.selectorPreload == "body") {
			var height = $(window).height();
			var width = $(window).width();
			var position = "fixed";
		} else {
			var height = $(QueryLoader.selectorPreload).outerHeight();
			var width = $(QueryLoader.selectorPreload).outerWidth();
			var position = "absolute";
		}
		var left = $(QueryLoader.selectorPreload).offset()['left'];
		var top = $(QueryLoader.selectorPreload).offset()['top'];
		QueryLoader.overlay = $("<div></div>").appendTo($(QueryLoader.selectorPreload));
		$(QueryLoader.overlay).addClass("QOverlay");
		$(QueryLoader.overlay).css({
			position: position,
			top: top,
			left: left,
			width: width + "px",
			height: height + "px"
		});
		QueryLoader.loadBar = $("<div></div>").appendTo($(QueryLoader.overlay));
		$(QueryLoader.loadBar).addClass("QLoader");
		$(QueryLoader.loadBar).css({
			position: "relative",
			top: "50%",
			width: "0%"
		});
	},
	animateLoader: function() {
		var perc = (100 / QueryLoader.doneStatus) * QueryLoader.doneNow;
		if (perc > 99) {
			$(QueryLoader.loadBar).stop().animate({
				width: perc + "%"
			},
			500, "swing", function() {
				QueryLoader.doneLoad();
			});
		} else {
			$(QueryLoader.loadBar).stop().animate({
				width: perc + "%"
			},
			500, "swing", function() {});
		}
	},
	doneLoad: function() {
		$("html, body").animate({ scrollTop: $(document).height() }, 0);
		clearTimeout(QueryLoader.ieTimeout);
		if (QueryLoader.selectorPreload == "body") {
			var height = $(window).height();
		} else {
			var height = $(QueryLoader.selectorPreload).outerHeight();
		}
		$(QueryLoader.loadBar).animate({
			//height: height + "px",
			//top: 0
		},
		500, "swing", function() {
			$(QueryLoader.overlay).fadeOut(800);
			$(QueryLoader.preloader).remove();
			$("html, body").animate({ scrollTop: 0 }, 1000);

		});
	}
}