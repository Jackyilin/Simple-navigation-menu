$(function(){
	$(".main > a").toggle(function(){
		$(this).next("ul").stop().slideDown("slow");
		$(this).css("background-image","url('images/up.gif')");
	},function(){
		$(this).next("ul").stop().slideUp("slow");
		$(this).css("background-image","url('images/down.gif')");
	});
	
	$(".hmain").hover(function(){
		$(this).children("ul").stop().slideDown("slow");
		$(this).children("a").css("background-image","url('images/up.gif')");
	},function(){
		$(this).children("ul").stop().slideUp("slow");
		$(this).children("a").css("background-image","url('images/down.gif')");
	});
});


