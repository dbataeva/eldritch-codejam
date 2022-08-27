import { showCards } from './showCards.js';
import { chooseEnemy } from './chooseEnemy.js';

const main = () => {
	const startButton = document.querySelector('.start');
	const againButton = document.querySelector('.again');
	const difficultyLabel = document.querySelectorAll('.difficulty-label');

	startButton.addEventListener('click', showCards);
	againButton.addEventListener('click', reload);
	difficultyLabel.forEach(label => label.addEventListener('click', changeChecked));
	chooseEnemy();
}

const reload = () => {
	location.reload();
}

const changeChecked = (event) => {
	event.target.previousElementSibling.checked = true;
}

main();
