import Deck from './deck.js';
import Player from './player.js';
import Table from './table.js';

export default class Koikoi {
	constructor() {
		this.deck = new Deck();
		this.player1 = new Player();
		this.player2 = new Player();
		this.table = new Table();
	}
}
