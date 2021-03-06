const { search, kmpSearch } = require('./substring-search');

test('test1', () => {
  const txt = 'ABACADABRAC';
  const pat = 'ABRA';
  const result = search(txt, pat);
  const expected = 6;
  expect(result).toBe(expected);
});

test('test2', () => {
  const txt = 'ABACADABRAC';
  const pat = 'ABRAO';
  const result = search(txt, pat);
  const expected = 11;
  expect(result).toBe(expected);
});

test('test3', () => {
  const txt = 'ABACADABRAC';
  const pat = 'ABRA';
  const result = kmpSearch(txt, pat);
  const expected = 6;
  expect(result).toBe(expected);
});

test('test4', () => {
  const txt = 'ABACADABRAC';
  const pat = 'ABRAO';
  const result = kmpSearch(txt, pat);
  const expected = 11;
  expect(result).toBe(expected);
});
