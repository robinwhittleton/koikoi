class Table {
	constructor(cards = []) {
		this.cards = cards;
	}

	place(card) {
		if (this.cards.length < 8) {
			this.cards.push(card);
			return true;
		} else {
			return false;
		}
	}

	remove(id) {
		// TODO
	}

	findMatches(card) {
		// TODO
	}
}
