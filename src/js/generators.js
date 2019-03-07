/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  let characterArray = [];
  let allowedTypesLength = allowedTypes.length; //длина массива

  for(let i = 0; i < characterCount; i+=1) {
  	// случайное число из длины массива
  	let randomTypeNum = Math.floor(Math.random() * (allowedTypesLength + 1));
  	// случайное число из maxLevel
  	let randomLevel = Math.floor(Math.random() * (maxLevel + 1));

  	// случайный элемент массива
  	let randomType = allowedTypes[randomTypeNum];

  	// случайный персонаж
  	let randomCharacter = new randomType(randomLevel);
  	let character.push(randomCharacter);
  }
  return characterArray;
}
