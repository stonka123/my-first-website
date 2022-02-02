const burgerBtn = document.querySelector('.hamburger')
const burgerColor = document.querySelector('.hamburger-inner')
const navMobile = document.querySelector('.mobile')
const navMobileItem = document.querySelectorAll('.mobile__item')
const footYear = document.querySelector('.footer__year')
const main = document.querySelector('.main')

const showNav = () => {
	burgerBtn.classList.toggle('is-active')
	navMobile.classList.toggle('mobile-active')
	document.body.classList.toggle('sticky-body')
	navMobileItem.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('mobile-active')
			document.body.classList.remove('sticky-body')
			burgerBtn.classList.remove('is-active')
		})
	})
}
const checkYear = () => {
	const year = new Date().getFullYear()
	footYear.innerHTML = year
}
checkYear()
const handleObserver = () => {
	const currentSection = window.scrollY

	if (main.classList.contains('main') && main.offsetTop <= currentSection + 80) {
		burgerColor.classList.add('green-bars-color')
	} else {
		burgerColor.classList.remove('green-bars-color')
	}

	
}


burgerBtn.addEventListener('click', showNav)
window.addEventListener('scroll', handleObserver)
