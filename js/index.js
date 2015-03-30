/*
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-29 21:36:15
 * @version $Id$
 */
$(document).ready(function() {
	$(function() {
		$('.sidebar-btn').click(function() {
			var sidebar_exict = $('.nav-sidebar').css('display');
			if(sidebar_exict == 'none') {
				$(this).animate({left:'14.5em'},500).queue(function(next) {
					$(this).html('点击收起');
					next();
				});
				$('.nav-sidebar').css({left:'-100%',display: 'inline-block'}).animate({left:0},500);
			} else {
				$('.nav-sidebar').animate({left:'-100%'},600).queue(function(next) {
					$(this).css({display: 'none'});
					next();
				});
				$(this).animate({left:0},500).queue(function(next) {
					$(this).html('点击展开');
					next();
				});
			}
			
		});
	});
});
$(window).resize(function() {
	var body_width = $('body').width();
	if(body_width > 768) {	
		$('.nav-sidebar').css({display: 'inline-block'});
		$('.sidebar-btn').css({display: 'none'});
	} else {
		$('.nav-sidebar').css({display: 'none'});
		$('.sidebar-btn').css({display: 'inline',left:0}).html('点击展开');

	}
})