class BreadthFirstPaths {
  constructor(graph, s) {
    this.marked = new Array(graph.V()).fill(false);
    this.edgeTo = new Array(graph.V()).fill(null);
    this.s = s;
    this.bfs(graph, s);
  }

  bfs(graph, v) {
    const queue = [];
    this.marked[v] = true;
    queue.push(v);
    while (queue.length > 0) {
      const cur = queue.shift();
      for (let w of graph.adj[cur]) {
        if (!this.marked[w]) {
          this.edgeTo[w] = cur;
          this.marked[w] = true;
          queue.push(w);
        }
      }
    }
  }

  hasPathTo(v) {
    return this.marked[v];
  }

  pathTo(v) {
    if (!this.hasPathTo(v)) return null;
    const path = [];
    for (let i = v; i !== this.s; i = this.edgeTo[i]) {
      path.unshift(i);
    }
    path.unshift(this.s);
    return path;
  }
}

module.exports = BreadthFirstPaths;
