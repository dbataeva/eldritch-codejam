import { easyX2Set } from './easyX2Set.js';
import { commonCardsSet } from './commonCardsSet.js';

export const easySet = (enemy) => {
	const easySet = new Map();

	easySet.set('blue', easyX2Set(enemy).get('blue').concat(commonCardsSet().get('blue')));
	easySet.set('green', easyX2Set(enemy).get('green').concat(commonCardsSet().get('green')));
	easySet.set('brown', easyX2Set(enemy).get('brown').concat(commonCardsSet().get('brown')));

	return easySet;
}