import { blueCards } from './blue/index.js';
import { brownCards } from './brown/index.js';
import { greenCards } from './green/index.js';

export const normalSet = () => {
	const normalSet = new Map();

	normalSet.set('blue', blueCards);
	normalSet.set('green', greenCards);
	normalSet.set('brown', brownCards);

	return normalSet;
}
