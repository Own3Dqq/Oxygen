$(document).ready(function () {
	$('.slider__items').slick({
		autoplay: 10000,
		prevArrow: '<button class="slick-prev" type="button" ></button>',
		nextArrow: '<button class="slick-next" type="button" ></button>',
		dots: true,
		infinite: true,
		speed: 500,
		customPaging: function (slider, i) {
			return $('<button type="button" />');
		},
		fade: true,
		cssEase: 'linear',
	});
});
