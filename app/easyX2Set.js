import { addCards } from './addCards.js';
import { getCountForColorForEnemy } from './getCountForColorForEnemy.js';

const easyGreen = [
	'./assets/MythicCards/green/green1.png',
	'./assets/MythicCards/green/green12.png',
	'./assets/MythicCards/green/green16.png',
	'./assets/MythicCards/green/green17.png',
	'./assets/MythicCards/green/green18.png',
];

const easyBrown = [
	'./assets/MythicCards/brown/brown11.png',
	'./assets/MythicCards/brown/brown12.png',
	'./assets/MythicCards/brown/brown13.png',
	'./assets/MythicCards/brown/brown14.png',
	'./assets/MythicCards/brown/brown21.png',
];

const easyBlue = [
	'./assets/MythicCards/blue/blue3.png',
	'./assets/MythicCards/blue/blue4.png',
	'./assets/MythicCards/blue/blue5.png',
	'./assets/MythicCards/blue/blue10.png',
];

export const easyX2Set = (enemy) => {
	const [green, brown, blue] = getCountForColorForEnemy(enemy);

	if (easyGreen.length < green) {
		addCards('green', green - easyGreen.length, easyGreen);
	}

	if (easyBrown.length < brown) {
		addCards('brown', brown - easyBrown.length, easyBrown);
	}

	if (easyBlue.length < blue) {
		addCards('blue', blue - easyBlue.length, easyBlue);
	}

	const easyX2Set = new Map();

	easyX2Set.set('blue', easyBlue);
	easyX2Set.set('green', easyGreen);
	easyX2Set.set('brown', easyBrown);

	return easyX2Set;
}
