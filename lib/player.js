class Player {
	constructor(cards = []) {
		this.hand = cards;
	}

	addToHand(card) {
		this.hand.push(card);
	}
}
