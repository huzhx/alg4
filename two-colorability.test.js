const Graph = require('./graph');
const TwoColorability = require('./two-colorability');

test('test isBipartite()', () => {
  const graph = new Graph(13);
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(0, 5);
  graph.addEdge(0, 6);
  graph.addEdge(3, 5);
  graph.addEdge(4, 5);
  graph.addEdge(4, 6);
  const tc = new TwoColorability(graph);
  const result = tc.isBipartite();
  expect(result).toBeTruthy();
});
