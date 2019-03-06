import Character from '../Character';

class Undead extends Character {
	constructor() {
		this.attack = 25;
        this.defence = 25;
        this.steps = 4;
        this.attackSteps = 1;
	}
}// end class