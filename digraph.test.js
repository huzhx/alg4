const Digraph = require('./digraph');

test('test V()', () => {
  const digraph = new Digraph(5);
  const result = digraph.V();
  const expected = 5;
  expect(result).toBe(expected);
});

test('test addEdge(v, w) and toString()', () => {
  const digraph = new Digraph(5);
  digraph.addEdge(3, 2);
  const result = digraph.toString();
  const expected = '5 vertices, 1 edges\n0: \n1: \n2: \n3: 2 \n4: \n';
  expect(result).toBe(expected);
  digraph.addEdge(3, 2);
  const result2 = digraph.toString();
  expect(result2).toBe(expected);
});

test('test E()', () => {
  const digraph = new Digraph(5);
  digraph.addEdge(3, 2);
  digraph.addEdge(2, 3);
  const result = digraph.E();
  const expected = 2;
  expect(result).toBe(expected);
});

test('test reverse()', () => {
  const digraph1 = new Digraph(5);
  digraph1.addEdge(3, 2);
  const digraph2 = new Digraph(5);
  digraph2.addEdge(2, 3);
  const result = digraph1;
  const expected = digraph2.reverse();
  expect(result).toEqual(expected);
});
