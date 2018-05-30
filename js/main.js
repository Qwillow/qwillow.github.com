;$(function(){
	'use strict'
	var sidebar=$('#sidebar');
	var mask=$('.mask');
	var sidebarT=$('.sidebarT');
	var backtotop=$('.back-to-top');
	function showsidebar(){
		mask.fadeIn();
		sidebar.css('right',0);
		
	}
	function hidesidebar()
	{
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}
	sidebarT.on('click',showsidebar);
	mask.on('click',hidesidebar);
	backtotop.on('click' ,function(){
	$('html,body').animate({scrollTop:0},800);
		
	});
	$(window).on('scroll',function(){
		if($(window).scrollTop()>$(window).height())
		backtotop.fadeIn();
		else 
		 backtotop.fadeOut();
	})
	$(window).trigger('scroll');
})
