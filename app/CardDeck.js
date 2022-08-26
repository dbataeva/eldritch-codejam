import { blueCards } from '../assets/MythicCards/blue/index.js';
import { brownCards } from '../assets/MythicCards/brown/index.js';
import { greenCards } from '../assets/MythicCards/green/index.js';

export default class CardDeck {

	constructor(enemy, difficulty) {
		console.log(enemy);
		switch (difficulty) {
			case 'easyX2':
				//do something
				break ;
			case 'easy':
				//do something
				break ;
			case 'normal':
				this.createCardDEckForNormalDifficulty(enemy);
				break ;
			case 'hard':
				//do something
				break ;
			case 'hardX2':
				//do something
				break ;
		}
	}

	createCardDEckForNormalDifficulty(enemy) {
		for (let key in enemy) {
			this[key] = this.getCardsForStage(enemy[key]);
		}
	}

	getCardsForStage(stageSet) {
		const cardsArr = [];

		for (let color in stageSet) {
			this.getCardsWithColor(color, stageSet[color], cardsArr);
		}
		
		return this.mixCards(cardsArr);
	}

	getCardsWithColor(color, cardsCount, cardsArr) {
		switch (color) {
			case 'blue':
				this.getSeveralCards(blueCards, cardsCount, cardsArr);
				break ;
			case 'brown':
				this.getSeveralCards(brownCards, cardsCount, cardsArr);
				break;
			case 'green':
				this.getSeveralCards(greenCards, cardsCount, cardsArr);
				break;
		}
	}

	getSeveralCards(cardsSet, cardsCount, cardsArr) {
		for (let i = 0; i < cardsCount; ++i) {
			const randomCard = this.getRandomCard(cardsSet);

			
			if (cardsArr.includes(randomCard)) {
				--i;
			} else {
				cardsArr.push(randomCard);
			}
		}
	}

	getRandomCard(cardsSet) {
		const randomNumber = this.getRandomInteger(0, cardsSet.length);

		return (cardsSet[randomNumber]);
	}

	mixCards(oldCardsArr) {
		const newCardsArr = [];

		for (let i = 0; i < oldCardsArr.length; ++i) {
			const randomIndex = this.getRandomInteger(0, oldCardsArr.length);

			if (newCardsArr.includes(oldCardsArr[randomIndex])) {
				--i;
			} else {
				newCardsArr[i] = oldCardsArr[randomIndex];
			}
		}

		return newCardsArr;
	}

	getRandomInteger(min, max) {
		return (Math.floor((max - min) * Math.random() + min));
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
	
}