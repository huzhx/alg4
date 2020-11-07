class ConnectedComponents {
  constructor(graph) {
    this.marked = new Array(graph.V()).fill(false);
    this.id = new Array(graph.V()).fill(null);
    this.count = 0;
    for (let s = 0; s < graph.V(); s++) {
      if (!this.marked[s]) {
        this.dfs(graph, s);
        this.count++;
      }
    }
  }

  dfs(graph, v) {
    this.marked[v] = true;
    this.id[v] = this.count;
    for (let w of graph.adj[v]) {
      if (!this.marked[w]) {
        this.dfs(graph, w);
      }
    }
  }

  connected(v, w) {
    return this.id[v] === this.id[w];
  }

  getCount() {
    return this.count;
  }
}

module.exports = ConnectedComponents;
