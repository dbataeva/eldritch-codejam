import CardDeck from './CardDeck.js';
import { getAncients } from './ancients.js';
import { showStatus } from './showStatus.js';
import { blockChoseEnemy } from './chooseEnemy.js';
import { defineChosenEnemy } from './defineChosenEnemy.js';
import { defineChosenDifficulty } from './defineChosenDifficulty.js';

let enemy; 
let cardDeck;

const ancients = getAncients();
const cardDeckImage = './assets/mythicCardBackground.png';
const currentCard = document.querySelector('.current-card');

export const showCards = (event) => {
	enemy = defineChosenEnemy(ancients);
	if (!enemy) {
		alert('You have to choose an enemy first!');
		return ;
	}
	blockChoseEnemy();
	cardDeck = new CardDeck(enemy, defineChosenDifficulty());
	event.target.removeEventListener('click', showCards);
	event.target.addEventListener('click', showAlert);

	const hiddenCard = document.querySelector('.card-deck');

	hiddenCard.style.backgroundImage = `url(${cardDeckImage})`;
	hiddenCard.addEventListener('click', showCard);

	showStatus(cardDeck);
}

const showCard = (event) => {
	const nextCard = cardDeck.getCard();
	const cardsCount = cardDeck.getCardsCount();

	if (!cardsCount) {
		event.target.style.backgroundImage = '';
	}
	if (nextCard) {
		currentCard.style.backgroundImage = `url(${nextCard})`;
	}

	showStatus(cardDeck);
}

const showAlert = () => {
	alert('If you want to get another card deck, you have to press button "mix again!"');
}
