$(document).ready(function () {

	$('.slider').slick({
		slidesToShow: 1,
		speed: 500,
		autoplay: false,
		dots:true,
	});

	//custom nav for slider
	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});

	//beauty select
	$('.select-beauty').niceSelect();

});
