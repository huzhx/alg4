const Digraph = require('./digraph');
const TopologicalSort = require('./topological-sort');

test('test isDAG()', () => {
  const digraph = new Digraph(13);
  digraph.addEdge(0, 5);
  digraph.addEdge(0, 1);
  digraph.addEdge(0, 6);
  digraph.addEdge(2, 0);
  digraph.addEdge(2, 3);
  digraph.addEdge(3, 5);
  digraph.addEdge(5, 4);
  digraph.addEdge(6, 4);
  digraph.addEdge(6, 9);
  digraph.addEdge(7, 6);
  digraph.addEdge(8, 7);
  digraph.addEdge(9, 11);
  digraph.addEdge(9, 12);
  digraph.addEdge(9, 10);
  digraph.addEdge(11, 12);
  const ts = new TopologicalSort(digraph);
  const result = ts.isDAG();
  expect(result).toBeTruthy();
});

test('test order()', () => {
  const digraph = new Digraph(13);
  digraph.addEdge(0, 5);
  digraph.addEdge(0, 1);
  digraph.addEdge(0, 6);
  digraph.addEdge(2, 0);
  digraph.addEdge(2, 3);
  digraph.addEdge(3, 5);
  digraph.addEdge(5, 4);
  digraph.addEdge(6, 4);
  digraph.addEdge(6, 9);
  digraph.addEdge(7, 6);
  digraph.addEdge(8, 7);
  digraph.addEdge(9, 11);
  digraph.addEdge(9, 12);
  digraph.addEdge(9, 10);
  digraph.addEdge(11, 12);
  const ts = new TopologicalSort(digraph);
  const result = ts.order();
  const expected = [8, 7, 2, 3, 0, 6, 9, 10, 11, 12, 1, 5, 4];
  expect(result).toEqual(expected);
});
