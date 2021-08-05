import Deck from './deck.js';
import Player from './player.js';
import Table from './table.js';
import Matcher from './matcher.js';

export default class Koikoi {
	constructor() {
		this.deck = new Deck();
		this.player1 = new Player();
		this.player2 = new Player();
		this.players = [this.player1, this.player2];
		this.currentPlayerIndex = Math.round(Math.random()); // Random initial player
		this.currentPlayer = this.players[this.currentPlayerIndex];
		this.nextPlayer = this.players[(this.currentPlayerIndex + 1) % 2];
		this.table = new Table();

		this.initialiseCards();

		this.playGame();
	}

	initialiseCards() {
		for (let i = 0; i < 8; i++){
			this.nextPlayer.addToHand(this.deck.deal());
		}
		for (let i = 0; i < 8; i++){
			this.table.place(this.deck.deal());
		}
		for (let i = 0; i < 8; i++){
			this.currentPlayer.addToHand(this.deck.deal());
		}
	}

	swapPlayers() {
		this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
		this.currentPlayer = this.players[this.currentPlayerIndex];
		this.nextPlayer = this.players[(this.currentPlayerIndex + 1) % 2];
	}

	playGame() {
		while(this.deck.cards.length) {
			this.playRound();
			this.swapPlayers();
		}
	}

	playRound() {
		// Matches for current player?
		const matches = Matcher.findMatches(this.table.cards, this.currentPlayer.hand);

		if (matches.length === 0) {
			// Discard a card
		} else {
			// Pick a matching card
		}

		this.currentPlayer.addToHand(this.deck.deal());
	}
}
