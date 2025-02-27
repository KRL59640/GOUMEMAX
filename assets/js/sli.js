var swiper = new Swiper(".mySwiper", {
	effect: "fade",
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar"
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});
