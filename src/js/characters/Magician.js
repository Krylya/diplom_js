import Character from '../Character';

class Magician extends Character {
	constructor(level) {
		this.attack = 10;
        this.defence = 40;
        this.steps = 1;
        this.attackSteps = 4;
	}
}// end class