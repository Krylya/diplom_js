import Magician from '../src/js/magician';

// step = 1 stoned = false
test('test step = 1 stoned = false', () => {
  const magician = new Magician('маг');

  const test = magician.attack;
  const expected = 10;

  expect(test).toEqual(expected);
});

// step = 1 stoned = true
test('test step = 1 stoned = true', () => {
  const magician = new Magician('маг');
  magician.stoned = true;

  const test = magician.attack;
  const expected = 2.08;

  expect(test).toEqual(expected);
});

// step = 3 stoned = false
test('test step = 3 stoned = false', () => {
  const magician = new Magician('маг');

  magician.attack = 3;
  const test = magician.attack;
  const expected = 8;

  expect(test).toEqual(expected);
});


// step = 3 stoned = false
test('test step = 3 stoned = true', () => {
  const magician = new Magician('маг');
  magician.stoned = true;

  magician.attack = 3;
  const test = magician.attack;
  const expected = 0.08;

  expect(test).toEqual(expected);
});

// step = -1 stoned = false
test('test step = -1 stoned = true', () => {
  const magician = new Magician('маг');

  magician.attack = -1;
  const test = magician.attack;
  const expected = 10;

  expect(test).toEqual(expected);
});
