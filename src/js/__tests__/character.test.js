import {
  Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../character';

test.each([
  [['t', 'Undead'], 'Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов'],
  [['asdfghjkloiu', 'Undead'], 'Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов'],
  [['12', 'Undead'], 'Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов'],
])(
  ('class Character should throw name error'),
  (input, expected) => {
    expect(() => {
      new Character(input[0], input[1]);
    }).toThrowError(new Error(expected));
  },
);

test('class Character should throw type error', () => {
  const input = ['test', 'undea'];
  expect(() => {
    new Character(input[0], input[1]);
  }).toThrowError(new Error(`Персонаж ${input[1]} не существет`));
});

test('class Character should constructs object', () => {
  const input = ['test', 'swordsman'];
  const expected = {
    name: 'test',
    type: 'swordsman',
    health: 100,
    level: 1,
  };
  const received = new Character(input[0], input[1]);
  expect(received).toEqual(expected);
});

test('class Bowerman should constructs object', () => {
  const input = ['test', 'bowerman'];
  const expected = {
    name: 'test',
    type: 'bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const received = new Bowerman(input[0], input[1]);
  expect(received).toEqual(expected);
});

test('class Swordsman should constructs object', () => {
  const input = ['test', 'swordsman'];
  const expected = {
    name: 'test',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = new Swordsman(input[0], input[1]);
  expect(received).toEqual(expected);
});

test('class Magician should constructs object', () => {
  const input = ['test', 'magician'];
  const expected = {
    name: 'test',
    type: 'magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const received = new Magician(input[0], input[1]);
  expect(received).toEqual(expected);
});

test('class Daemon should constructs object', () => {
  const input = ['test', 'daemon'];
  const expected = {
    name: 'test',
    type: 'daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const received = new Daemon(input[0], input[1]);
  expect(received).toEqual(expected);
});

test('class Undead should constructs object', () => {
  const input = ['test', 'undead'];
  const expected = {
    name: 'test',
    type: 'undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const received = new Undead(input[0], input[1]);
  expect(received).toEqual(expected);
});

test('class Zombie should constructs object', () => {
  const input = ['test', 'zombie'];
  const expected = {
    name: 'test',
    type: 'zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = new Zombie(input[0], input[1]);
  expect(received).toEqual(expected);
});
