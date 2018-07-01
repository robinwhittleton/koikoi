import _shuffle from 'lodash/shuffle';
import cardData from '../data/cards';

class Deck {
	constructor(cards = cardData) {
		this.cards = cards;
	}

	shuffle() {
		_.shuffle(this.cards);
	}

	deal() {
		return this.cards.pop();
	}
}

module.exports = Deck;
