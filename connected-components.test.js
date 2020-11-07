const Graph = require('./graph');
const ConnectedComponents = require('./connected-components');

test('test connected()', () => {
  const graph = new Graph(13);
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(0, 5);
  graph.addEdge(0, 6);
  graph.addEdge(3, 4);
  graph.addEdge(3, 5);
  graph.addEdge(4, 5);
  graph.addEdge(4, 6);
  graph.addEdge(7, 8);
  graph.addEdge(9, 10);
  graph.addEdge(9, 11);
  graph.addEdge(9, 12);
  graph.addEdge(11, 12);
  const cc = new ConnectedComponents(graph);
  const result = cc.connected(0, 6);
  expect(result).toBeTruthy();
  const result2 = cc.connected(6, 7);
  expect(result2).toBeFalsy();
});

test('test getCount()', () => {
  const graph = new Graph(13);
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(0, 5);
  graph.addEdge(0, 6);
  graph.addEdge(3, 4);
  graph.addEdge(3, 5);
  graph.addEdge(4, 5);
  graph.addEdge(4, 6);
  graph.addEdge(7, 8);
  graph.addEdge(9, 10);
  graph.addEdge(9, 11);
  graph.addEdge(9, 12);
  graph.addEdge(11, 12);
  const cc = new ConnectedComponents(graph);
  const result = cc.getCount();
  const expected = 3;
  expect(result).toBe(expected);
});
