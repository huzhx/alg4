const Graph = require('./graph');

test('test V()', () => {
  const graph = new Graph(5);
  const result = graph.V();
  const expected = 5;
  expect(result).toBe(expected);
});

test('test E()', () => {
  const graph = new Graph(5);
  graph.addEdge(3, 2);
  graph.addEdge(2, 3);
  const result = graph.E();
  const expected = 1;
  expect(result).toBe(expected);
});

test('test addEdge(v, w)', () => {
  const graph = new Graph(5);
  graph.addEdge(3, 2);
  const expected = [[], [], [3], [2], []];
  expect(graph.adj).toEqual(expected);
});

test('test toString()', () => {
  const graph = new Graph(5);
  graph.addEdge(3, 2);
  const result = graph.toString();
  const expected = '5 vertices, 1 edges\n0: \n1: \n2: 3 \n3: 2 \n4: \n';
  expect(result).toBe(expected);
});
