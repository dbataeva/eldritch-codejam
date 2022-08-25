import CardDeck from './CardDeck.js';
import { getAncients } from './ancients.js';
import { defineChosenEnemy } from './defineChosenEnemy.js';
import { defineChosenDifficulty } from './defineChosenDifficulty.js';

const main = () => {
	const ancients = getAncients();
	const cardDeck = new CardDeck(defineChosenEnemy(ancients), defineChosenDifficulty());

	console.log(cardDeck);

}

main();
