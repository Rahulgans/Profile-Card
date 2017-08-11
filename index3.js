/*$( document ).ready(function() { */


var toHome = function(field){
	/*$("body").css("background-color","green").fadeTo("fast", 0.15);*/
	$(".home").removeClass("showOnClick");
	$(".home").addClass("hideOnClick");
	$ (".info").slideToggle(500); 
	$(".contact").slideToggle(500);
/*	$(".heading,h3,p,hr,.front,li").fadeToggle("fast"); */

	$(".stats").addClass("showOnClick");
	$(".stats li").fadeOut("slow");

	$(".heading,h3,p,hr,.front,.home li").fadeIn("slow");
};

$(".info").on("click",toHome);

var toContact = function(field){
	$(".stats").removeClass("showOnClick");
 	$(".stats").addClass("hideOnClick");
 	$(".info").slideToggle(500);
 	$(".contact").slideToggle(500);
	$(".home").addClass("showOnClick");

	/*$(".stats").fadeToggle("slow"); */

	$(".heading,h3,p,hr,.front,.home li").fadeOut("slow");
	$(".stats li").fadeIn("slow");


	

};

$(".contact").on("click",toContact);
/*}); */


