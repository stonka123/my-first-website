const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.mobile');

const showNav = () => {
	burgerBtn.classList.toggle('is-active');
	navMobile.classList.toggle('mobile-active');
};

burgerBtn.addEventListener('click', showNav);
