const Graph = require('./graph');
const BreadthFirstPaths = require('./breadth-first-paths');

test('test bfs()', () => {
  const graph = new Graph(6);
  graph.addEdge(0, 2);
  graph.addEdge(0, 1);
  graph.addEdge(0, 5);
  graph.addEdge(2, 3);
  graph.addEdge(2, 4);
  const bfp = new BreadthFirstPaths(graph, 0);
  const result = bfp.edgeTo;
  const expected = [null, 0, 0, 2, 2, 0];
  expect(result).toEqual(expected);
});

test('test hasPathTo(v)', () => {
  const graph = new Graph(6);
  graph.addEdge(0, 2);
  graph.addEdge(0, 1);
  graph.addEdge(0, 5);
  graph.addEdge(2, 3);
  graph.addEdge(2, 4);
  const bfp = new BreadthFirstPaths(graph, 0);
  const result = bfp.hasPathTo(5);
  expect(result).toBeTruthy();
});

test('test pathTo(v)', () => {
  const graph = new Graph(6);
  graph.addEdge(0, 2);
  graph.addEdge(0, 1);
  graph.addEdge(0, 5);
  graph.addEdge(2, 3);
  graph.addEdge(2, 4);
  const bfp = new BreadthFirstPaths(graph, 0);
  const result = bfp.pathTo(5);
  const expected = [0, 5];
  expect(result).toEqual(expected);
  const result2 = bfp.pathTo(7);
  const expected2 = null;
  expect(result2).toEqual(expected2);
});
