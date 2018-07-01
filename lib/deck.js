import _shuffle from 'lodash/shuffle';
import cardData from '../data/cards';

class Deck {
	constructor(cards = cardData) {
		this.cards = cards;
	}

	shuffle() {
		this.cards = _shuffle(this.cards);
	}

	deal() {
		const card = this.cards.pop();
		return card ? card : false;
	}
}

module.exports = Deck;
