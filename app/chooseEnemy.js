const cthulhu = document.querySelector('.cthulhu');
const shubNiggurath = document.querySelector('.shubNiggurath');
const iogSothoth = document.querySelector('.iogSothoth');
const azathoth = document.querySelector('.azathoth');

const enemies = [
	cthulhu,
	shubNiggurath,
	iogSothoth,
	azathoth
];

export const chooseEnemy = () => {
	enemies.forEach(enemy => enemy.addEventListener('click', addChosenClass));
}

const addChosenClass = (event) => {
	enemies.forEach(enemy => {
		if (enemy === event.target) {
			enemy.classList.add('chosen');
		} else if (enemy.classList.contains('chosen')) {
			enemy.classList.remove('chosen');
		}
	});
}

export const blockChoseEnemy = () => {
	enemies.forEach(enemy => {
		enemy.removeEventListener('click', addChosenClass);
		enemy.addEventListener('click', showAlert);
	});
}

const showAlert = () => {
	alert('If you want to choose another enemy, you have to press button "mix again"');
}
