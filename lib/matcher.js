export default class Matcher {
	static findMatches(table, hand) {
		let matches = [];
		for (let i = 0; i < table.length; i++) {
			for (let j = 0; j < hand.length; j++) {
				console.log(table[i].month, hand[j].month)
				if (table[i].month === hand[j].month) {
					matches.push({ table: i, hand: j });
				}
			}
		}
		return matches;
	}
}
