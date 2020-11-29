const KeyIndexedCounting = require('./key-indexed-counting');

test('test sort()', () => {
  const items = [
    { name: 'Andersion', section: 2 },
    { name: 'Brown', section: 3 },
    { name: 'Davis', section: 3 },
    { name: 'Garcia', section: 4 },
    { name: 'Harris', section: 1 },
  ];
  const keyIndexedCounting = new KeyIndexedCounting(items);
  const result = keyIndexedCounting.sort();
  const expected = [
    { name: 'Harris', section: 1 },
    { name: 'Andersion', section: 2 },
    { name: 'Brown', section: 3 },
    { name: 'Davis', section: 3 },
    { name: 'Garcia', section: 4 },
  ];
  expect(result).toEqual(expected);
});
