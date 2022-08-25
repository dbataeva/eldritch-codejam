export const defineChosenEnemy = (ancients) => {
	const chosenEnemy = document.querySelector('.chosen');

	return ancients.get(chosenEnemy.classList[0]);
}