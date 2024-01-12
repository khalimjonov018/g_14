const swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	clickable: true,
	loop: true,
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
});
const plan = new Swiper(".mySwiper-two", {
	loop: true,
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
});
