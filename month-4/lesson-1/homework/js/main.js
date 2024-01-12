const navContent = document.querySelector(".navbar__content");
const navBlocksIMG = document.querySelector(".navbar__blocks");
const navFlags = document.querySelector(".navbar__img-boxs");
navContent.addEventListener("click", () => {
	navFlags.classList.toggle("hidden");
});
const swiper = new Swiper(".mySwiper", {
	loop: true,
	navigation: {
			nextEl: ".next",
			prevEl: ".prev",
	},
});

