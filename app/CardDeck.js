import { easySet } from './easySet.js';
import { hardSet } from './hardSet.js';
import { easyX2Set } from './easyX2Set.js';
import { normalSet } from './normalSet.js';
import { hardX2Set } from './hardX2Set.js';
import { getRandomInteger } from './getRandomInteger.js';

export default class CardDeck {

	constructor(enemy, difficulty) {
		switch (difficulty) {
			case 'easyX2':
				this.createCardDEck(enemy, easyX2Set(enemy));
				break;
			case 'easy':
				this.createCardDEck(enemy, easySet(enemy));
				break;
			case 'normal':
				this.createCardDEck(enemy, normalSet());
				break;
			case 'hard':
				this.createCardDEck(enemy, hardSet(enemy));
				break;
			case 'hardX2':
				this.createCardDEck(enemy, hardX2Set(enemy));
				break;
		}
	}

	createCardDEck(enemy, cardSet) {
		for (let key in enemy) {
			this[key] = this.getCardsForStage(enemy[key], cardSet);
		}
	}

	getCardsForStage(stageSet, cardSet) {
		const cardsArr = [];

		for (let color in stageSet) {
			this.getCardsWithColor(cardSet.get(color), stageSet[color], cardsArr, color);
		}

		return this.mixCards(cardsArr);
	}

	getCardsWithColor(cardsSet, cardsCount, cardsArr, color) {
		for (let i = 0; i < cardsCount; ++i) {
			const randomCard = this.getRandomCard(cardsSet);

			if (this.checkIfTheCardIsAlreadyInDeck(randomCard) || cardsArr.includes(randomCard)) {
				--i;
			} else {
				cardsArr.push(randomCard);
			}
		}
	}

	checkIfTheCardIsAlreadyInDeck(randomCard) {
		for (let stage in this) {
			if (this[stage].includes(randomCard)) {
				return true;
			}
		}
		return false;
	}

	getRandomCard(cardsSet) {
		const randomNumber = getRandomInteger(0, cardsSet.length);

		return (cardsSet[randomNumber]);
	}

	mixCards(oldCardsArr) {
		const newCardsArr = [];

		for (let i = 0; i < oldCardsArr.length; ++i) {
			const randomIndex = getRandomInteger(0, oldCardsArr.length);

			if (newCardsArr.includes(oldCardsArr[randomIndex])) {
				--i;
			} else {
				newCardsArr[i] = oldCardsArr[randomIndex];
			}
		}

		return newCardsArr;
	}

	getCard() {
		for (let key in this) {
			if (this[key][0]) {
				return this[key].pop();
			}
		}
	}

	getCardsCount() {
		return Object.values(this).reduce((sum, item) => sum + item.length, 0);
	}

	getStatus() {
		const status = {};

		for (let key in this) {
			let green = 0;
			let brown = 0;
			let blue = 0;

			this[key].forEach(card => {
				if (card.includes('green')) {
					++green;
				}
				if (card.includes('brown')) {
					++brown;
				}
				if (card.includes('blue')) {
					++blue;
				}
			});
			status[key] = [green, brown, blue];
		}
		return status;
	}
}
