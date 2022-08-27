export const defineChosenEnemy = (ancients) => {
	const chosenEnemy = document.querySelector('.chosen');

	console.dir(chosenEnemy);

	if (!chosenEnemy) {
		return ;
	}
	return ancients.get(chosenEnemy.classList[0]);
}