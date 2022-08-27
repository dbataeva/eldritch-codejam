import { showCards } from './showCards.js';
import { chooseEnemy } from './chooseEnemy.js';

const main = () => {
	const startButton = document.querySelector('.start');
	const againButton = document.querySelector('.again');

	startButton.addEventListener('click', showCards);
	againButton.addEventListener('click', reload);
	chooseEnemy();
}

const reload = () => {
	location.reload();
}

main();
