const toggle = document.querySelector('.btn__toggle');
const prices = document.querySelectorAll('.offer__price');
const annuallyPrices = document.querySelectorAll('.offer__annually');

const togglePrices = () => {
	toggle.classList.toggle('active');
	prices.forEach((price) => {
		price.classList.toggle('hide');
	});
	annuallyPrices.forEach((price) => {
		price.classList.toggle('show');
	});
};

toggle.addEventListener('click', togglePrices);
