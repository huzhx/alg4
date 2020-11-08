const Graph = require('./graph');
const CycleDetection = require('./cycle-detection');

test('test has Cycle()', () => {
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
  const cd = new CycleDetection(graph);
  const result = cd.hasCycle();
  expect(result).toBeTruthy();
});
