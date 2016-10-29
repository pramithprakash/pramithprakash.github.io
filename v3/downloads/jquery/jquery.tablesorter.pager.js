var page_number;
var page_size;
var total_pages;
(function($) {
	$.extend({
		tablesorterPager: new function() {
			
			function updatePageDisplay(c) {
				var s = $(c.cssPageDisplay,c.container).val((c.page+1) + c.seperator + c.totalPages);	
			}
			
			function setPageSize(table,size) {
				var c = table.config;
				c.size = size;
				c.totalPages = Math.ceil(c.totalRows / c.size);
				c.pagerPositionSet = false;
				moveToPage(table);
				fixPosition(table);
			}
			
			function fixPosition(table) {
				var c = table.config;
				if(!c.pagerPositionSet && c.positionFixed) {
					var c = table.config, o = $(table);
					if(o.offset) {
						c.container.css({
							/*top: o.offset().top + o.height() + 'px',
							position: 'absolute'*/
						});
					}
					c.pagerPositionSet = true;
				}
			}
			
			function moveToFirstPage(table) {
				var c = table.config;
				c.page = 0;
				moveToPage(table);
			}
			
			function moveToLastPage(table) {
				var c = table.config;
				c.page = (c.totalPages-1);
				moveToPage(table);
			}
			
			function moveToNextPage(table) {
				var c = table.config;
				c.page++;
				if(c.page >= (c.totalPages-1)) {
					c.page = (c.totalPages-1);
				}
				moveToPage(table);
			}
			
			function moveToPrevPage(table) {
				var c = table.config;
				c.page--;
				if(c.page <= 0) {
					c.page = 0;
				}
				moveToPage(table);
			}
			function getPageNumber(table){
				var c = table.config;
				return c.page;	
			}
			
			function moveToPage(table) {
				var c = table.config;
				if(c.page < 0 || c.page > (c.totalPages-1)) {
					c.page = 0;
				}
				
				renderTable(table,c.rowsCopy);
			}
			
			function renderTable(table,rows) {
				
				var c = table.config;
				var l = rows.length;
				var s = (c.page * c.size);
				var e = (s + c.size);
				if(e > rows.length ) {
					e = rows.length;
				}
				
				
				var tableBody = $(table.tBodies[0]);
				
				// clear the table body
				
				$.tablesorter.clearTableBody(table);
				
				for(var i = s; i < e; i++) {
					
					//tableBody.append(rows[i]);
					
					var o = rows[i];
					var l = o.length;
					for(var j=0; j < l; j++) {
						
						tableBody[0].appendChild(o[j]);

					}
				}
				
				fixPosition(table,tableBody);
				
				$(table).trigger("applyWidgets");
				
				if( c.page >= c.totalPages ) {
        			moveToLastPage(table);
				}
				
				updatePageDisplay(c);
			}
			
			this.appender = function(table,rows) {
				
				var c = table.config;
				
				c.rowsCopy = rows;
				c.totalRows = rows.length;
				c.totalPages = Math.ceil(c.totalRows / c.size);
				
				renderTable(table,rows);
			};
			
			this.defaults = {
				size: 10,
				offset: 0,
				page: 0,
				totalRows: 0,
				totalPages: 0,
				container: null,
				cssNext: '.next',
				cssPrev: '.prev',
				cssFirst: '.first',
				cssLast: '.last',
				cssPageDisplay: '.pagedisplay',
				cssPageSize: '.pagesize',
				seperator: "/",
				positionFixed: true,
				appender: this.appender
			};
			
			this.construct = function(settings) {
				
				return this.each(function() {	
					
					config = $.extend(this.config, $.tablesorterPager.defaults, settings);
					
					var table = this, pager = config.container;
					
					$(this).trigger("appendCache");
					
					config.size = parseInt($(".pagesize",pager).val());
					
					var c=table.config;page_number=c.page;page_size=c.size;total_pages=c.totalPages;
					
					$('#page_num').val(page_number);
					$('#page_size').val(page_size);
					
					//alert('page number-->'+page_number+'Page Size-->'+page_size);
						
					$(config.cssFirst,pager).click(function() {
						//$('#JT').remove();
						$('#cluetip').hide();
						moveToFirstPage(table);
						var c=table.config;page_number=c.page;page_size=c.size;total_pages=c.totalPages;
						$('#page_num').val(page_number);
						$('#page_size').val(page_size);
						
						//alert('page number-->'+page_number+'Page Size-->'+page_size);
						return false;
					});
					$(config.cssNext,pager).click(function() {
						//$('#JT').remove();
						$('#cluetip').hide();
						moveToNextPage(table);
						var c=table.config;page_number=c.page;page_size=c.size;total_pages=c.totalPages;
						$('#page_num').val(page_number);
						$('#page_size').val(page_size);
						
						//alert('page number-->'+page_number+'Page Size-->'+page_size);
						return false;
					});
					$(config.cssPrev,pager).click(function() {
						//$('#JT').remove();
						$('#cluetip').hide();
						moveToPrevPage(table);
						var c=table.config;page_number=c.page;page_size=c.size;total_pages=c.totalPages;
						$('#page_num').val(page_number);
						$('#page_size').val(page_size);
						
						//alert('page number-->'+page_number+'Page Size-->'+page_size);
						return false;
					});
					$(config.cssLast,pager).click(function() {
						$('#cluetip').hide();
						//$('#JT').remove();
						moveToLastPage(table);
						var c=table.config;page_number=c.page;page_size=c.size;total_pages=c.totalPages;
						$('#page_num').val(page_number);
						$('#page_size').val(page_size);
						
						//alert('page number-->'+page_number+'Page Size-->'+page_size);
						return false;
					});
					$(config.cssPageSize,pager).change(function() {
						//$('#JT').remove();
						$('#cluetip').hide();
						setPageSize(table,parseInt($(this).val()));
						var c=table.config;page_number=c.page;page_size=c.size;total_pages=c.totalPages;
						$('#page_num').val(page_number);
						$('#page_size').val(page_size);
						//	alert('page number-->'+page_number+'Page Size-->'+page_size);
						return false;
					});
				});
			};
			
		}
	});
	// extend plugin scope
	$.fn.extend({
        tablesorterPager: $.tablesorterPager.construct
	});
	
})(jQuery);				