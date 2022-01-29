const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.mobile');
const navMobileItem = document.querySelectorAll('.mobile__item');

const showNav = () => {
	burgerBtn.classList.toggle('is-active');
	navMobile.classList.toggle('mobile-active');
	navMobileItem.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('mobile-active');
		});
	});
};
burgerBtn.addEventListener('click', showNav);
