//JS script for about page


$(document).ready(function(){
	
	$(".about-img-background").mouseover(function(){
		$(this).addClass("image-darken");
		
	});
	
	$(".about-item-wrapper").mouseleave(function(){
		$(this).children().removeClass("image-darken");
	});
	
	
});

