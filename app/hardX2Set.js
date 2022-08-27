import { addCards } from './addCards.js';
import { getCountForColorForEnemy } from './getCountForColorForEnemy.js';

const hardGreen = [
	'./assets/MythicCards/green/green2.png',
	'./assets/MythicCards/green/green3.png',
	'./assets/MythicCards/green/green4.png',
	'./assets/MythicCards/green/green5.png',
	'./assets/MythicCards/green/green6.png',
];

const hardBrown = [
	'./assets/MythicCards/brown/brown6.png',
	'./assets/MythicCards/brown/brown7.png',
	'./assets/MythicCards/brown/brown8.png',
	'./assets/MythicCards/brown/brown9.png',
	'./assets/MythicCards/brown/brown10.png',
];

const hardBlue = [
	'./assets/MythicCards/blue/blue1.png',
	'./assets/MythicCards/blue/blue2.png',
	'./assets/MythicCards/blue/blue6.png',
	'./assets/MythicCards/blue/blue8.png',
];

export const hardX2Set = (enemy) => {
	const [green, brown, blue] = getCountForColorForEnemy(enemy);

	if (hardGreen.length < green) {
		addCards('green', green - hardGreen.length, hardGreen);
	}

	if (hardBrown.length < brown) {
		addCards('brown', brown - hardBrown.length, hardBrown);
	}

	if (hardBlue.length < blue) {
		addCards('blue', blue - hardBlue.length, hardBlue);
	}

	const hardX2Set = new Map();

	hardX2Set.set('blue', hardBlue);
	hardX2Set.set('green', hardGreen);
	hardX2Set.set('brown', hardBrown);

	return hardX2Set;
}
