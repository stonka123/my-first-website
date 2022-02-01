const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.mobile')
const navMobileItem = document.querySelectorAll('.mobile__item')
const footYear = document.querySelector('.footer__year')

const showNav = () => {
	burgerBtn.classList.toggle('is-active')
	navMobile.classList.toggle('mobile-active')
	document.body.classList.toggle('sticky-body')
	navMobileItem.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('mobile-active')
			document.body.classList.remove('sticky-body')
		})
	})
}
const checkYear = () => {
	const year = new Date().getFullYear()
	footYear.innerHTML = year
}
checkYear()

burgerBtn.addEventListener('click', showNav)
