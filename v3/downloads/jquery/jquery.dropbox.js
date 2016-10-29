/*!
 * jQuery DropBox plugin: twitter like drop box
 * Examples and documentation at: http://gireeshmg.com/
 * version 1.0 (20-AUG-2010)
 * Requires jQuery v1.3.2 or later
 * Authors: Gireesh Bhat
 */

/*
 *  dropbox() takes settings and box argument:  $('#mymenu').dropbox($('#mybox'))
 *  box: dropbox that need to be used e.g., box:$('#mybox')
 *  corners: pixel value (1-5 suggested)
 *  backgroundColor:   background color of the dropbox and the menu. 
 *           
 */
 
/* Usage
*$(this).dropbox({  
*	box: $("#fgPwdBox"),
*	backgroundColor: "#657575",
*	cornerRadius: 2					
*}) 
*/
 
(function($){

 	$.fn.extend({ 
 		
 		dropbox: function(options) {
		
			//Settings list and the default values  
			 var defaults = {
				 corner: true,
				 cornerRadius: 5, 
				 backgroundColor: 'blue'				 
			 };

			var options = $.extend(defaults, options);  

    		return this.each(function() {
				 var o =options;  
                 var menu = $(this);
				 var box = o.box;
				 var backgroundColor = o.backgroundColor;
				 var cornerRadius = o.cornerRadius;
				
				box.css('background-color', backgroundColor);
					
				menu.css('background-color', backgroundColor);
				
				if (box.css('display') == 'block') {
					closeBox(menu, box);					
				}
				else { 
					var offset = menu.offset();
					var menu_width = menu.width();
					var box_width = box.width();
					var pos = offset.left - box_width + menu_width;
					var offsetPos
					if(pos < 0)
					{
						offsetPos = offset.left;
					}
					else
					{
						offsetPos = pos-12
					}
					
					box.css({
							'left': offsetPos , 
							'top': offset.top + 21,
							'position':'absolute', 'display': 'block'})
					
					//menu.css('background', '#32CBFF').corner(cornerRadius);
					
					
					if(o.corner)
					{
						box.uncorner().corner(cornerRadius+"px");
						menu.corner(cornerRadius+"px");
						$(".innerBox").corner(cornerRadius+"px");
					}
				}
				
				

				
				//remove AllMenu Box	
				function RemoveAllBox()
				{
					$("[class^=boxContent]").each(function(){
						box = $(this).attr('id');
						menu = box.substr(0, box.length-3);
						//closeBox(menu, box);
					})	
				}
				
				//remove box
				function closeBox(menu, box)
				{
					box.css('display', 'none');
					menu.css('background', 'none').corner(cornerRadius+"px");
				}
				
				//remove box on clicked close
				$('.closeBox').mouseup(function(e) {
					box =  $(this).parent().attr("id");
					id = box.substr(0, box.length-3 )
					closeBox(id);
				});
			});
		}
		
		
	});
	
	
})(jQuery);

