import { commonCardsSet } from './commonCardsSet.js';
import { getRandomInteger } from './getRandomInteger.js'

export const addCards = (color, countCardsAdd, arrToAdd) => {
	const commonCardsArrWithTheColor = commonCardsSet().get(color);

	for (let i = 0; i < countCardsAdd; ++i) {
		const randomIndex = getRandomInteger(0, commonCardsArrWithTheColor.length);
		const newCard = commonCardsArrWithTheColor[randomIndex];

		if (arrToAdd.includes(newCard)) {
			--i;
		} else {
			arrToAdd.push(newCard);
		}
	}
}