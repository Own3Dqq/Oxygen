document.addEventListener('DOMContentLoaded', () => {
	new ItcSimpleSlider('.itcss', {
		loop: true,
		autoplay: false,
		interval: 5000,
		swipe: true,
	});
});

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});
