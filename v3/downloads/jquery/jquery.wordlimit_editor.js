/*!
 * jquery.wordlimit.js
 * Limit number of words entered into a form input or textarea.
 * http://mikehodgson.com/
 *
 * Copyright 2010, Mike Hodgson
 * Licensed under the BSD license
 * http://creativecommons.org/licenses/BSD/
 *
 * Date: Tue Oct 19 12:08:06 2010 -0500
 */

$.fn.wordLimit = function(p) {
	var params = {
		limit: 200,
		counterElement: '#counterDisplay'
	};
	
	if (p) {
		$.extend(params, p);
	}
	
	$(params.counterElement).html(params.limit);
	
	this.keyup(function() {
		if (jQuery.trim($(this).val()) === '') {
			words = 0;
		} else {
			words = $.trim($(this).val()).split(' ').length;			
		}
		if (words > params.limit) {
			$(this).val($(this).val().substring(0, $(this).val().lastIndexOf(",")+1));
		} else {
			$(params.counterElement).html(params.limit - words);
		}
	});	
};