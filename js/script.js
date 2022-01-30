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

const checkWhiteSection = () => {
	if (window.scrollY > 690) {
		console.log('o juz!');
	}
};

checkWhiteSection();
burgerBtn.addEventListener('click', showNav);
