import CardDeck from './CardDeck.js';
import { getAncients } from './ancients.js';
import { defineChosenEnemy } from './defineChosenEnemy.js';
import { defineChosenDifficulty } from './defineChosenDifficulty.js';

const ancients = getAncients();
const cardDeckImage = './assets/mythicCardBackground.png'
const currentCard = document.querySelector('.current-card');
const cardDeck = new CardDeck(defineChosenEnemy(ancients), defineChosenDifficulty());

export const showCards = () => {
	const hiddenCard = document.querySelector('.card-deck');

	hiddenCard.style.backgroundImage = `url(${cardDeckImage})`;
	hiddenCard.addEventListener('click', showCard);
}

const showCard = (event) => {
	const nextCard = cardDeck.getCard();
	const cardsCount = cardDeck.getCardsCount();

	if (!cardsCount) {
		event.target.style.backgroundImage = '';
	}
	if (nextCard) {
		currentCard.style.backgroundImage = `url(${nextCard})`;
	} else {
		currentCard.style.backgroundImage = '';
	}
}