export class Player {

	bot: boolean = true;
	score: number = 0;

	updateScore(total: number) {
		this.score += total;
		return this.score;
	}
}