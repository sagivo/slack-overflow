
(function($) {
    "use strict";
		
	/* Contact form */
	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})

	/* Newsletter */
	$('.newsletter_wrapper .newsletter_form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.newsletter_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	});	
	
	/* template functions */
	$(document).ready(function(){
		
		// smaller screens
		main_functions_call();
		function main_functions_call(container){
			if(typeof container === 'undefined'){
				container = 'body';
			}
			
			// adding mobile class on smaller screens
			$(container).is_smallerScreen();
			// responsive navigation
			$(container).wt_responsive_nav();	
		}
	})
	
	jQuery(window).load(function(){	
	});
	
	/* Adding Mobile Class
	================================================== */
	(function($) {
		$.fn.is_smallerScreen = function() {
			var win               = $(window),
				container         = $('html'),
				isResponsiveMode  = container.hasClass('cssanimations'),	
				check_screen      = function() {
					
					if( win.width() < 1000 && isResponsiveMode ){
						container.addClass('is_smallScreen');
					} else {
						container.removeClass('is_smallScreen');
					}
				};
	
				win.on("smartresize", check_screen);
				check_screen();
		};
	})(jQuery);
	
		
	// ========================= smartresize ===============================
			
	/*
	* smartresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize
	*
	* Copyright 2012 @louis_remi
	* Licensed under the MIT license.
	*
	* This saved you an hour of work? 
	* Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
	*/
		
	(function($){
		"use strict";
				
		if(!jQuery.fn.smartresize)
		  {
			  var $event = $.event,
				  resizeTimeout;
			
			  $event.special.smartresize = {
				setup: function() {
				  $(this).bind( "resize", $event.special.smartresize.handler );
				},
				teardown: function() {
				  $(this).unbind( "resize", $event.special.smartresize.handler );
				},
				handler: function( event, execAsap ) {
				  // Save the context
				  var context = this,
					  args = arguments;
			
				  // set correct event type
				  event.type = "smartresize";
			
				  if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
				  resizeTimeout = setTimeout(function() {
					jQuery.event.handle.apply( context, args );
				  }, execAsap === "execAsap"? 0 : 100 );
				}
			  };
			
			  $.fn.smartresize = function( fn ) {
				return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
			  };
		  }	
	}(jQuery));

			
	/* Responsive Navigation
	================================================== */
	(function($) {
		$.fn.wt_responsive_nav = function() {
			var win = $(window), header = $('#header');
	
			if(!header.length) {
				return;
			}
	
			var menu              = header.find('#nav:eq(0)'),
				first_level_items = menu.find('>li').length,
				switchWidth = 768;
	
			if(first_level_items > 8) {
				switchWidth = 959;
			}
			// if there is no menu selected
			if(header.is('.drop_down_nav')) {
				menu.mobileMenu({
					switchWidth: switchWidth,
					topOptionText: $('#nav').data('select-name'), // first option text
					indentString: 'ontouchstart' in document.documentElement ? '- ' : "&nbsp;&nbsp;&nbsp;"  // string for indenting nested items
				});
			} else {
				var container       = $('#container'),
					responsive_nav_wrap	= $('<div id="wt_responsive_nav_wrap"></div>').prependTo(container),
					show_menu		= $('<a id="responsive_nav_open" href="#" class=""><i class="icon icon-align-justify"></i></a>'),
					hide_menu		= $('<a id="responsive_nav_hide" href="#" class=""><i class="icon icon-remove"></i></a>'),
					responsive_nav  = menu.clone().attr({id:"wt-responsive-nav", "class":""}),
					menu_item       = responsive_nav.find('a'),    
					one_page_item   = menu_item.attr('href').match("^#") ? true : false,
					menu_added      = false;
									
					responsive_nav.find('ul').removeAttr("style");
					responsive_nav.find('.notMobile').remove();
					
					// hiding all sub-menus		
					/*	
					responsive_nav.find('li').each(function(){
						var el = $(this);
						if(el.find('> ul').length > 0) {
							 el.find('> a').append('<i class="fontawesome-icon wt_icon-angle-down"></i>');
						}
					});
	
					responsive_nav.find('li:has(">ul") > a').click(function(){
						var el = $(this),
							icon = el.find('.fontawesome-icon'),
							el_parent = el.parent().find('> ul'),
							screen_h  = win.height();
						
						var el_parent_height = el_parent.css({position:'relative'}).outerHeight(true),
							container_height = container.outerHeight(true),
							new_height = container_height + el_parent_height,
							new_height_1 = container_height - el_parent_height;
							
						el.toggleClass('active');
						el_parent.stop(true,true).slideToggle();
						
						if ( el.hasClass('active') ) {
							icon.removeClass('wt_icon-angle-down').addClass('wt_icon-angle-up');
							if(new_height < screen_h) new_height = screen_h;
								container.css({'height':new_height});
						} else {
							icon.removeClass('wt_icon-angle-up').addClass('wt_icon-angle-down');
							if(new_height_1 < screen_h) new_height_1 = screen_h;
								container.css({'height':new_height_1});
							
						}
						
						return false;
					});
					*/
					// end hiding all sub-menus	
					
					show_menu.click(function() {
						if(container.is('.show_responsive_nav')) {
							container.removeClass('show_responsive_nav');
							container.css({'height':"auto"});
						} else {
							container.addClass('show_responsive_nav');
							set_height();
						}
						return false;
					});
					
					// start responsive one page navigation	
					if (one_page_item) {			
						menu_item.click(function(e) {
							if(container.is('.show_responsive_nav')) {						
								container.removeClass('show_responsive_nav');
								container.css({'height':"auto"});
									var full_url = this.href;
									var parts = full_url.split("#");
									var trgt = parts[1];
									var target_offset = $("#"+trgt).offset();
									var target_top = target_offset.top;
									$('html,body').animate({scrollTop:target_top -60}, 1000);
									return false;
								e.preventDefault();
							}
						});
					}
					// end responsive one page navigation
					
					hide_menu.click(function() {
						container.removeClass('show_responsive_nav');
						container.css({'height':"auto"});
						return false;
					});
	
					var set_visibility = function() {
						if(win.width() > switchWidth) {
							header.removeClass('small_device_active');
							container.removeClass('show_responsive_nav');
							container.css({'height':"auto"});
						} else {
							header.addClass('small_device_active');
							if(!menu_added) {
								var before_menu = header.find('#nav');
								show_menu.insertBefore(before_menu);
								responsive_nav.prependTo(responsive_nav_wrap);
								hide_menu.prependTo(container);
								menu_added = true;
							}
	
							if(container.is('.show_responsive_nav')) {
								set_height();
							}
						}
					},
	
					set_height = function() {
						var height = responsive_nav.css({position:'relative'}).outerHeight(true),
							win_h  = win.height();
	
						if(height < win_h) {
							height = win_h;
						}
						responsive_nav.css({position:'absolute'});
						container.css({'height':height});
					};
	
					win.on("smartresize", set_visibility);
					set_visibility();
			}	
		};
	})(jQuery);
})(jQuery);