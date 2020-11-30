const LeastSignificantDigitFirst = require('./least-significant-digit-first');

test('test sort()', () => {
  const items = [
    '4PGC938',
    '2IYE230',
    '3CIO720',
    '1ICK750',
    '1OHV845',
    '4JZY524',
    '1ICK750',
    '3CIO720',
    '1OHV845',
    '1OHV845',
    '2RLA629',
    '2RLA629',
    '3ATW723',
  ];
  const lsd = new LeastSignificantDigitFirst();
  const result = lsd.sort(items, 7);
  const expected = [
    '1ICK750',
    '1ICK750',
    '1OHV845',
    '1OHV845',
    '1OHV845',
    '2IYE230',
    '2RLA629',
    '2RLA629',
    '3ATW723',
    '3CIO720',
    '3CIO720',
    '4JZY524',
    '4PGC938',
  ];
  expect(result).toEqual(expected);
});
