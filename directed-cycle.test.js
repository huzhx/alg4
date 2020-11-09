const Digraph = require('./digraph');
const DirectedCycle = require('./directed-cycle');

test('test hasCycle()', () => {
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
  const dc = new DirectedCycle(digraph);
  const result = dc.hasCycle();
  expect(result).toBeTruthy();
});

test('test cycle()', () => {
  const digraph = new Digraph(7);
  digraph.addEdge(0, 1);
  digraph.addEdge(0, 5);
  digraph.addEdge(2, 0);
  digraph.addEdge(3, 5);
  digraph.addEdge(4, 3);
  digraph.addEdge(5, 4);
  digraph.addEdge(6, 0);
  digraph.addEdge(6, 4);
  const dc = new DirectedCycle(digraph);
  const result = dc.cycle();
  const expected = [3, 5, 4, 3];
  expect(result).toEqual(expected);
});
