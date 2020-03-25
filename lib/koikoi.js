import Deck from './deck.js';
import Player from './player.js';
import Table from './table.js';

export default class Koikoi {
	constructor() {
		this.deck = new Deck();
		this.player1 = new Player();
		this.player2 = new Player();
		this.players = [];
		this.table = new Table();

		this.initialisePlayerOrder();
		this.initialiseCards();
	}

	initialisePlayerOrder() {
		this.players.push(this.player1);
		Math.random() > 0.5 ? this.players.push(this.player2) : this.players.unshift(this.player2);
	}

	initialiseCards() {
		for (let i = 0; i < 8; i++){
			this.players[1].addToHand(this.deck.deal());
		}
		for (let i = 0; i < 8; i++){
			this.table.place(this.deck.deal());
		}
		for (let i = 0; i < 8; i++){
			this.players[0].addToHand(this.deck.deal());
		}
	}
}
