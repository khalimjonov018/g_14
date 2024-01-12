const chosenPizza = {
	thin: 10,
	medium: 12,
	thick: 15,
};
const chosenSize = {
	size_20: 10,
	size_30: 12,
	size_35: 15,
};
const pricePz = document.querySelector("#priceEl");
function pircePizza() {
	let pizzaSz = 0;
	const bredPizza = document.getElementById("chosePizza");
	const pizzaselect = document.getElementsByName("pizza");
	pricePz.innerHTML = chosenSize[pizzaselect.value];
	pricePz.innerHTML = chosenPizza[bredPizza.value];
	pizzaSz += bredPizza + pizzaselect;
}
