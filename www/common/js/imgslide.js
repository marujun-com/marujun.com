$(document).ready(function(){
						   
	$('ul#sp_simg1 > li').hover(function(){ 
		$(this).fadeTo(80,0.5);
	},function() {
		$(this).fadeTo(80,1);
	});
	
	$('ul#sp_simg1 > li > a').click(function(){
		var src = $(this).attr("href"); 
		var title = $(this).attr("title");
		$("#sp_mainimg1").fadeOut("middle",function() {
			$(this).find("img").attr("src",src);
			$(this).find("em").html(title);
			$(this).fadeIn();
		});
		return false;
	});
	
	$('ul#sp_simg2 > li').hover(function(){ 
		$(this).fadeTo(80,0.5);
	},function() {
		$(this).fadeTo(80,1);
	});
	
	$('ul#sp_simg2 > li > a').click(function(){
		var src = $(this).attr("href"); 
		var title = $(this).attr("title");
		$("#sp_mainimg2").fadeOut("middle",function() {
			$(this).find("img").attr("src",src);
			$(this).find("em").html(title);
			$(this).fadeIn();
		});
		return false;
	});
	
	$('ul#sp_simg3 > li').hover(function(){ 
		$(this).fadeTo(80,0.5);
	},function() {
		$(this).fadeTo(80,1);
	});
	
	$('ul#sp_simg3 > li > a').click(function(){
		var src = $(this).attr("href"); 
		var title = $(this).attr("title");
		$("#sp_mainimg3").fadeOut("middle",function() {
			$(this).find("img").attr("src",src);
			$(this).find("em").html(title);
			$(this).fadeIn();
		});
		return false;
	});
	
	$('ul#sp_simg4 > li').hover(function(){ 
		$(this).fadeTo(80,0.5);
	},function() {
		$(this).fadeTo(80,1);
	});
	
	$('ul#sp_simg4 > li > a').click(function(){
		var src = $(this).attr("href"); 
		var title = $(this).attr("title");
		$("#sp_mainimg4").fadeOut("middle",function() {
			$(this).find("img").attr("src",src);
			$(this).find("em").html(title);
			$(this).fadeIn();
		});
		return false;
	});
	
});