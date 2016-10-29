/*
 * Moving Boxes v2.0
 * by Chris Coyier
 * http://css-tricks.com/moving-boxes/
 */

(function($){
	$.movingBoxes = function(el, options){
		// To avoid scope issues, use 'base' instead of 'this'
		// to reference this class from internal events and functions.
		var base = this;

		// Access to jQuery and DOM versions of element
		base.$el = $(el).addClass('movingBoxes');
		base.el = el;

		// Add a reverse reference to the DOM object
		base.$el.data('movingBoxes', base);

		base.init = function(){
			base.options = $.extend({}, $.movingBoxes.defaultOptions, options);

			// Setup formatting (to reduce the amount of initial HTML)
			base.$el
				.css({ width : base.options.width }) // override css width
				.wrapInner('<div class="mb-scrollContainer" />')
				.wrapInner('<div class="mb-scroll" />')
				.prepend('<a class="mb-scrollButtons mb-left"></a>')
				.append('<a class="mb-scrollButtons mb-right"></a>')
				// find panels (immediate children of the starting element
				.find('.mb-scrollContainer ' + base.options.panelType).addClass('mb-panel').wrapInner('<div class="mb-inside" />');

			// defaults
			base.$container = base.$el.find('.mb-scrollContainer');
			base.$window = base.$el.find('.mb-scroll');
			base.runTime = $('.movingBoxes').index(base.$el) + 1; // Get index (run time) of this slider on the page
			base.regex = new RegExp('slider' + base.runTime + '=(\\d+)', 'i'); // hash tag regex
			base.$navLinks = {};

			// Set up panes & content sizes; default: panelWidth = 50% of entire width
			base.$panels = base.$el.find('.mb-panel').css({ width : base.options.width * base.options.panelWidth });
			base.totalPanels = base.$panels.length;

			// save 'cur' numbers (current larger panel size)
			base.curWidth = base.$panels.outerWidth();
			base.curImgWidth = base.$panels.find('img').outerWidth(true);
			base.curImgHeight = base.curImgWidth / base.options.imageRatio; // set images fit a 4:3 ratio

			// save 'reg' (reduced size) numbers
			base.regWidth = base.curWidth * base.options.reducedSize;
			base.regImgWidth = base.curImgWidth * base.options.reducedSize;
			base.regImgHeight = base.curImgHeight * base.options.reducedSize;

			// set image heights so scrollContainer height is correctly set
			base.$panels.find('img').css({ height: base.curImgHeight });

			// save each panel height... script will resize container as needed
			base.heights = base.$panels.map(function(i,e){ return $(e).outerHeight(true); }).get();

			// make scrollContainer wide enough to contain all the panels
			base.$container.css({
				position : 'absolute',
				width    : (base.curWidth + 50) * base.totalPanels,
				height   : Math.max.apply( this, base.heights )
			});
			base.$window.css({ height : Math.max.apply( this, base.heights ) });
			// add padding so scrollLeft = 0 centers the left-most panel (needed because scrollLeft cannot be < 0)
			base.$panels.eq(0).css({ 'margin-left' : (base.options.width - base.curWidth) / 2 });

			// Set up "Current" panel
			var startPanel = (base.options.hashTags) ?  base.getHash() || base.options.startPanel : base.options.startPanel;
			base.initialized = false;
			base.currentlyMoving = false;
			base.curPanel = 1;
			base.change(1);

			base.buildNav();

			// Set up click on left/right arrows
			base.$el.find('.mb-right').click(function(){
				base.goForward();
				return false;
			}).end().find('.mb-left').click(function(){
				base.goBack();
				return false;
			});

			// go to clicked panel
			base.$panels.click(function(){
				base.change( base.$panels.index($(this)) + 1 );
			});

			// Activate moving box on click or when an internal link obtains focus
			base.$el.click(function(){
				base.active();
			});
			base.$panels.find('a').focus(function(){
				// focused link centered in moving box
				var loc = base.$el.find('.mb-panel').index($(this).closest('.mb-panel')) + 1;
				if (loc !== base.curPanel){ base.change( base.$el.find('.mb-panel').index($(this).closest('.mb-panel')) + 1, {}, false ); }
			});

			// Add keyboard navigation
			$(document).keyup(function(e){
				switch (e.which) {
					case 39: case 32: // right arrow & space
						if (base.$el.is('.mb-active-slider')){
							base.goForward();
						}
						break;
					case 37: // left arrow
						if (base.$el.is('.mb-active-slider')){
							base.goBack();
						}
						break;
				}
			});

			// animate to chosen start panel - starting from the first panel makes it look better
			setTimeout(function(){
				base.change(startPanel, function(){

					// Bind Events
					$.each('initialized.movingBoxes initChange.movingBoxes beforeAnimation.movingBoxes completed.movingBoxes'.split(' '), function(i,o){
						var evt = o.split('.')[0];
						if ($.isFunction(base.options[evt])){
							base.$el.bind(o, base.options[evt]);
						}
					});

					base.initialized = true;
					base.$el.trigger( 'initialized.movingBoxes', [ base, startPanel ] );
				});
			}, base.options.speed * 2 );

		}; // end base.init()

		// Creates the numbered navigation links
		base.buildNav = function() {
			if (base.options.buildNav && (base.totalPanels > 1)) {
				base.$nav = $('<div class="mb-controls"><a class="mb-testing"></a></div>').appendTo(base.$el);
				var j, a = '',
				navFormat = $.isFunction(base.options.navFormatter),
				// need link in place to get CSS properties
				hiddenText = parseInt( base.$nav.find('.mb-testing').css('text-indent'), 10) < 0;
				base.$panels.each(function(i) {
					j = i + 1;
					a += '<a href="#" class="mb-panel' + j;
					// If a formatter function is present, use it
					if (navFormat) {
						var tmp = base.options.navFormatter(j, $(this));
						a += (hiddenText) ? ' ' + base.options.tooltipClass +'" title="' + tmp : '';
						a += '">' + tmp + '</a> ';
						// Add formatting to title attribute if text is hidden
					} else {
						a += '">' + j + '</a> ';
					}
				});
				base.$navLinks = base.$nav
					.html(a)
					.find('a').bind('click', function() {
						base.change( base.$navLinks.index($(this)) + 1 );
						return false;
					});
			}
		};

		// Resize panels to normal
		base.returnToNormal = function(num){
			base.$panels.not(':eq(' + (num-1) + ')')
				.removeClass(base.options.currentPanel)
				.animate({ width: base.regWidth, fontSize: base.options.reducedSize + 'em' }, base.options.speed)
				.find('img').animate({ width: base.regImgWidth, height: base.regImgHeight }, base.options.speed);
		};

		// Zoom in on selected panel
		base.growBigger = function(num){
			base.$panels.eq(num-1)
			.addClass(base.options.currentPanel)
			.animate({ width: base.curWidth, fontSize: '1em' }, base.options.speed)
			.find('img').animate({ width: base.curImgWidth, height: base.curImgHeight }, base.options.speed, function(){
				// completed event trigger
				// even though animation is not queued, trigger is here because it is the last animation to complete
				if (base.initialized) { base.$el.trigger( 'completed.movingBoxes', [ base, num ] ); }
			});
		};

		// go forward/back
		base.goForward = function(){ base.change(base.curPanel + 1); };

		base.goBack = function(){ base.change(base.curPanel - 1); };

		// Change view to display selected panel
		base.change = function(curPanel, callback, flag){

			// make sure it's a number and not a string
			curPanel = parseInt(curPanel, 10);

			if (base.initialized) {
				// make this moving box active
				base.active();
				// initChange event - has extra parameter with targeted panel (not cleaned)
				base.$el.trigger( 'initChange.movingBoxes', [ base, curPanel ] );
			}

			// psuedo wrap - it's a pain to clone the first & last panel then resize them correctly while wrapping AND make it look good
			if ( base.options.wrap ) {
				if ( curPanel < 1 ) { curPanel = base.totalPanels; }
				if ( curPanel > base.totalPanels ) { curPanel = 1; }
			} else {
				if ( curPanel < 1 ) { curPanel = 1; }
				if ( curPanel > base.totalPanels ) { curPanel = base.totalPanels; }
			}

			// don't do anything if it's the same panel
			if (base.initialized && base.curPanel == curPanel && !flag) { return false; }

			// abort if panel is already animating
			if (!base.currentlyMoving) {
				base.currentlyMoving = true;

				// center panel in scroll window
				var ani, leftValue = base.$panels.eq(curPanel-1).position().left - (base.options.width - base.curWidth) / 2;
				// when scrolling right, add the difference of the larger current panel width
				if (curPanel > base.curPanel) { leftValue -= ( base.curWidth - base.regWidth ); }

				ani = (base.options.fixedHeight) ? { scrollLeft : leftValue } : { scrollLeft: leftValue, height: base.heights[curPanel - 1] };

				// before animation trigger
				if (base.initialized) { base.$el.trigger( 'beforeAnimation.movingBoxes', [ base, curPanel ] ); }

				// animate the panels
				base.$window.animate( ani,
					{
						queue    : false,
						duration : base.options.speed,
						easing   : base.options.easing,
						complete : function(){
							base.curPanel = curPanel;
							if (base.initialized) {
								base.$panels.eq(curPanel - 1).find('a').focus();
								base.$window.scrollTop(0); // Opera fix - otherwise, it moves the focus link to the middle of the viewport
							}
							base.currentlyMoving = false;
							if (typeof(callback) === 'function') { callback(base); }
						}
					}
				);

				base.returnToNormal(curPanel);
				base.growBigger(curPanel);
				if (base.options.hashTags) { base.setHash(curPanel); }
			}
			base.$el.find('.mb-controls a')
				.removeClass(base.options.currentPanel)
				.eq(curPanel - 1).addClass(base.options.currentPanel);
		};

		// get & set hash tags
		base.getHash = function(){
			var n = window.location.hash.match(base.regex);
			return (n===null) ? '' : parseInt(n[1],10);
		};

		base.setHash = function(n){
			var s = 'slider' + base.runTime + "=",
				h = window.location.hash;
			if ( typeof h !== 'undefined' ) {
				window.location.hash = (h.indexOf(s) > 0) ? h.replace(base.regex, s + n) : h + "&" + s + n;
			}
		};

		// Make moving box active (for keyboard navigation)
		base.active = function(el){
			$('.mb-active-slider').removeClass('mb-active-slider');
			base.$el.addClass('mb-active-slider');
		};

		// get: var currentPanel = $('.slider').data('movingBoxes').currentPanel();  // returns # of currently selected/enlarged panel
		// set: var currentPanel = $('.slider').data('movingBoxes').currentPanel(2, function(){ alert('done!'); }); // returns and scrolls to 2nd panel
		base.currentPanel = function(panel, callback){
			if (typeof(panel) !== 'undefined') {
				base.change(panel, callback); // parse in case someone sends a string
			}
			return base.curPanel;
		};

		// Run initializer
		base.init();
	};

	$.movingBoxes.defaultOptions = {
		// Appearance
		startPanel   : 1,         // start with this panel
		width        : 800,       // overall width of movingBoxes
		panelWidth   : 0.5,       // current panel width adjusted to 50% of overall width
		reducedSize  : 0.8,       // non-current panel size: 80% of panel size
		imageRatio   : 4/3,       // Image ratio set to 4:3
		fixedHeight  : false,     // if true, slider height set to max panel height; if false, slider height will auto adjust.

		// Behaviour
		speed        : 500,       // animation time in milliseconds
		hashTags     : true,      // if true, hash tags are enabled
		wrap         : false,     // if true, the panel will "wrap" (it really rewinds/fast forwards) at the ends
		buildNav     : false,     // if true, navigation links will be added
		navFormatter : null,      // function which returns the navigation text for each panel
		easing       : 'swing',   // anything other than "linear" or "swing" requires the easing plugin

		// Selectors & classes
		currentPanel : 'current', // current panel class
		tooltipClass : 'tooltip', // added to the navigation, but the title attribute is blank unless the link text-indent is negative
		panelType    : '> div',   // selector to find the immediate (">") children "div" of the movingBoxes object)

		// Callbacks
		initialized     : null,   // callback when MovingBoxes has completed initialization
		initChange      : null,   // callback upon change panel initialization
		beforeAnimation : null,   // callback before any animation occurs
		completed       : null    // callback after animation completes
	};

	$.fn.movingBoxes = function(options){
		return this.each(function(){
			(new $.movingBoxes(this, options));
		});
	};

	// This function breaks the chain, but returns
	// the movingBoxes if it has been attached to the object.
	$.fn.getMovingBoxes = function(){
		return this.data('movingBoxes');
	};

})(jQuery);