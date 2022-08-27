import { hardX2Set } from './hardX2Set.js';
import { commonCardsSet } from './commonCardsSet.js';

export const hardSet = (enemy) => {
	const hardSet = new Map();

	hardSet.set('blue', hardX2Set(enemy).get('blue').concat(commonCardsSet().get('blue')));
	hardSet.set('green', hardX2Set(enemy).get('green').concat(commonCardsSet().get('green')));
	hardSet.set('brown', hardX2Set(enemy).get('brown').concat(commonCardsSet().get('brown')));

	return hardSet;
}