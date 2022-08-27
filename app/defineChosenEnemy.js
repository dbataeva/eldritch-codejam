export const defineChosenEnemy = (ancients) => {
	const chosenEnemy = document.querySelector('.chosen');
	
	if (!chosenEnemy) {
		return ;
	}
	return ancients.get(chosenEnemy.classList[0]);
}