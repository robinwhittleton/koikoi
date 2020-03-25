import cardData from '../data/cards.js';

export default class Deck {
	constructor(cards = cardData) {
		this.cards = cards;
	}

	shuffle() {
		// Durstenfield shuffle from https://stackoverflow.com/a/12646864/453783
		for (let i = this.cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
	}

	deal() {
		const card = this.cards.pop();
		return card ? card : false;
	}
}
