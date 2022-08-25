export const defineChosenDifficulty = () => {
	const radios = document.querySelectorAll('.difficulty-level');
	
	let chosenDifficulty;

	radios.forEach(radio => {
		if (radio.children[0].checked) {
			chosenDifficulty = radio.children[0].value;
		}
	});
	return chosenDifficulty;
}