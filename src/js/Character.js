export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;

    this.steps = 0;  // дальность хода персонажа
    this.attackSteps = 0; // радиус атаки
    // TODO: throw error if user use "new Character()"
    if (new.target.name === 'Character') throw "error if user use new Character()";
  }
}
