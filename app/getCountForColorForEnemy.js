export const getCountForColorForEnemy = (enemy) => {
	let green = 0;
	let brown = 0;
	let blue = 0;
	
	Object.values(enemy).forEach(stage => {
		green += stage.green;
		brown += stage.brown;
		blue += stage.blue;
	});

	return [green, brown, blue];
}