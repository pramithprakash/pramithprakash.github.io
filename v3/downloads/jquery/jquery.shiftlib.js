/*
 * shiftenter: a jQuery plugin, version: 0.0.2 (2011-05-04)
 * tested on jQuery v1.5.0
 *
 * ShiftEnter is a jQuery plugin that makes it easy to allow submitting a form
 * with textareas using a simple press on 'Enter'. Line breaks (newlines) in
 * these input fields can then be achieved by pressing 'Shift+Enter'.
 * Additionally a hint is shown.
 *
 * For usage and examples, visit:
 * http://cburgmer.github.com/jquery-shiftenter
 *
 * Settings:
 * 
 * $('textarea').shiftenter({
 *     focusClass: 'shiftenter',
 *     inactiveClass: 'shiftenterInactive',
 *     hint: 'Shift+Enter for line break'
 * });
 *
 * Optional dependencies:
 *
 *   - needs jquery-resize (http://benalman.com/projects/jquery-resize-plugin/)
 *     to adjust the hint text on textarea resizes (especially for webkit
 *     browsers)
 * 
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2011, Christoph Burgmer (christoph -[at]- nwebs [*dot*] de)
 */
(function($){
 
    $.fn.extend({
         
        //pass the options variable to the function
        shiftlib: function(options) {
 
 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                padding: 20,
                mouseOverColor : '#000000',
                mouseOutColor : '#ffffff'
            }
                 
            var options =  $.extend(defaults, options);
 
            return this.each(function() {
				$el=$(this);
				  $el.unbind('keydown.shiftenter');
        
             
            }).each(function() {
				$el=$(this);
		
             $el.bind('keydown.shiftenter', function(event) {
			
                if (event.keyCode === 13 && ! event.shiftKey) {
                   // $el.log('Got Shift+Enter, submitting');
                    event.preventDefault();
                    //$(this).blur();
					
                    $(this).parents('form').submit();
					event.stopPropagation();
                    return false;
                }
            });
             
            });
        },
		
		  unshiftlib: function(options) {
 
 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                padding: 20,
                mouseOverColor : '#000000',
                mouseOutColor : '#ffffff'
            }
                 
            var options =  $.extend(defaults, options);
 
            return this.each(function() {
				$el=$(this);
				  $el.unbind('keydown.shiftenter');
        
             
            });
        }
		
		
    });
     
})(jQuery);