import Character from '../character';

test('Create Character', () => {
  const name = 'name';
  const type = 'Bowman';

  const expected = {
    name,
    type,
    health: 100,
    level: 1,
  };

  const recevied = new Character(name, type);

  expect(recevied).toEqual(expected);
});

test('Error Character big length', () => {
  const name = '12345678910';
  const type = 'Bowman';

  expect(() => new Character(name, type)).toThrow(new Error('Неверная длинна имени'));
});

test('Error Character small length', () => {
  const name = '1';
  const type = 'Bowman';

  expect(() => new Character(name, type)).toThrow(new Error('Неверная длинна имени'));
});

test('Error Character type', () => {
  const name = 'name';
  const type = 'Bow';

  expect(() => new Character(name, type)).toThrow(new Error('Неверно указан тип'));
});
