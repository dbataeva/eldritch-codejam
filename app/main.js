import { showCards } from './showCards.js'

const main = () => {
	const startButton = document.querySelector('.start');
	const againButton = document.querySelector('.again');

	startButton.addEventListener('click', showCards);
	againButton.addEventListener('click', reload);
}

const reload = () => {
	location.reload();
}

main();
