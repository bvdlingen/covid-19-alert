/*! covid-19-name v0.0.1 */
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navList');

const toggleMenu = e => {

	e.preventDefault();

	navList.classList.contains('navList--visible')
		? navList.classList.remove('navList--visible')
		: navList.classList.add('navList--visible')
};

hamburger.addEventListener('click', toggleMenu);
navList.addEventListener('mouseleave', toggleMenu);

const modalTriggers = document.querySelectorAll('.popup-trigger');
const modalCloseTrigger = document.querySelector('.popup-modal__close');
const bodyBlackout = document.querySelector('.body-blackout');

modalTriggers.forEach(trigger => {
	trigger.addEventListener('click', () => {
		const { popupTrigger } = trigger.dataset;
		const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

		popupModal.classList.add('is--visible');
		bodyBlackout.classList.add('is-blacked-out');

		popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
			popupModal.classList.remove('is--visible');
			bodyBlackout.classList.remove('is-blacked-out');
		});

		bodyBlackout.addEventListener('click', () => {
			popupModal.classList.remove('is--visible');
			bodyBlackout.classList.remove('is-blacked-out');
		})
	})
});