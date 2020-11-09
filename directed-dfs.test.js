const Digraph = require('./digraph');
const DirectedDFS = require('./directed-dfs');

test('test reachableV()', () => {
  const digraph = new Digraph(7);
  digraph.addEdge(0, 1);
  digraph.addEdge(0, 5);
  digraph.addEdge(2, 0);
  digraph.addEdge(2, 3);
  digraph.addEdge(3, 2);
  digraph.addEdge(3, 5);
  digraph.addEdge(4, 2);
  digraph.addEdge(4, 3);
  digraph.addEdge(5, 4);
  digraph.addEdge(6, 0);
  digraph.addEdge(6, 4);
  const reachable = new DirectedDFS(digraph, [1, 2, 6]);
  const result = reachable.reachableV();
  const expected = [0, 1, 2, 3, 4, 5, 6];
  expect(result).toEqual(expected);
});
