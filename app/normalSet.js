import { blueCards } from '../assets/MythicCards/blue/index.js';
import { brownCards } from '../assets/MythicCards/brown/index.js';
import { greenCards } from '../assets/MythicCards/green/index.js';

export const normalSet = () => {
	const normalSet = new Map();

	normalSet.set('blue', blueCards);
	normalSet.set('green', greenCards);
	normalSet.set('brown', brownCards);

	return normalSet;
}
