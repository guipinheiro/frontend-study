jQuery(function () {
	// Adding animated classes with animated.css

	// $("button").addClass("animate__animated animate__bounce");
	// $(".card").addClass("animate__animated animate__shakeX");
	// $("#target3").addClass("animate__animated animate__fadeOut");

	//Change CSS with jquery
	$("button").css("color", "blue");

	//Change HTML property with jquery
	$("#target6").prop("disabled", true);

	//Change text inside an element using .html(). If you use .text(), it will only change the text without adding tags
	$("#target4").html("<em>#target4</em>");

	//To remove an element. just use .remove()
	$("#target4").remove();

	//To append an element, use .appendTo()
	$("#target2").appendTo("#right-well");

	//Or, if want to copy an element, just use .clone();
	$("#target5").clone().appendTo("#left-well");

	//You can easy access a parent element with .parent()
	$("#target1").parent().css("background-color", "gray");

	//Likewise, you can access all children nodes of your element by using .children();
	$("#right-well").children().css("color", "orange");

	//You can even use CSS Selectors with jQuery to target a specific element
	$(".target:nth-child(2)").addClass("animate__animated animate__shakeX");

	//You can also target elements based on their position (odd or even)
	$(".target:even").addClass("animate__animated animate__shakeY");
});

