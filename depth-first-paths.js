class DepthFirstPaths {
  constructor(graph, s) {
    this.marked = new Array(graph.V()).fill(false);
    this.edgeTo = new Array(graph.V()).fill(null);
    this.s = s;
    this.dfs(graph, s);
  }

  dfs(graph, v) {
    this.marked[v] = true;
    for (let w of graph.adj[v]) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.dfs(graph, w);
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

module.exports = DepthFirstPaths;
