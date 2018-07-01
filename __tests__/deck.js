import Deck from '../lib/deck';

describe('Deck', () => {
	it('should initialise with 48 cards', () => {
		const deck = new Deck();
		expect(deck.cards).toHaveLength(48);
	});
});
