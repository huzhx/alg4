const Graph = require('./graph');
const DepthFirstPaths = require('./depth-first-paths');

test('test dfs()', () => {
  const graph = new Graph(6);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  graph.addEdge(3, 5);
  const dfp = new DepthFirstPaths(graph, 0);
  const result = dfp.edgeTo;
  const expected = [null, 2, 0, 2, 3, 3];
  expect(result).toEqual(expected);
});

test('test hasPathTo(v)', () => {
  const graph = new Graph(6);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  graph.addEdge(3, 5);
  const dfp = new DepthFirstPaths(graph, 0);
  const result = dfp.hasPathTo(5);
  expect(result).toBeTruthy();
});

test('test pathTo(v)', () => {
  const graph = new Graph(7);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  graph.addEdge(3, 5);
  const dfp = new DepthFirstPaths(graph, 0);
  const result = dfp.pathTo(5);
  const expected = [0, 2, 3, 5];
  expect(result).toEqual(expected);
  const result2 = dfp.pathTo(7);
  const expected2 = null;
  expect(result2).toEqual(expected2);
});
