import Deck from '../lib/deck';

describe('Deck', () => {
	it('should initialise with 48 cards', () => {
		const deck = new Deck();
		expect(deck.cards).toHaveLength(48);
	});

	it('should shuffle the deck', () => {
		const deck = new Deck();
		deck.shuffle();
		const someEvidenceOfShuffling = deck.cards[0].id !== 1
			|| deck.cards[1].id !== 2
			|| deck.cards[2].id !== 3;
		expect(someEvidenceOfShuffling).toBe(true);
	});

	it('should deal a single card', () => {
		const deck = new Deck();
		const card = deck.deal();
		expect(deck.cards).toHaveLength(47);
		expect(card).toMatchObject({
			id: expect.any(Number),
			month: expect.any(Number),
			index: expect.any(Number),
			normal: expect.any(Boolean),
			redRibbon: expect.any(Boolean),
			blueRibbon: expect.any(Boolean),
			poetryRibbon: expect.any(Boolean),
			animal: expect.any(Boolean),
			bright: expect.any(Boolean),
		});
	});

	it('should return false when trying to deal and no cards left', () => {
		const deck = new Deck([]);
		const card = deck.deal();
		expect(deck.cards).toHaveLength(0);
		expect(card).toBe(false);
	});
});
