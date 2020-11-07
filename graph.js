class Graph {
  constructor(numV) {
    this.numV = numV;
    this.numE = 0;
    this.adj = new Array(numV).fill(null).map((_) => new Array(0).fill(null));
  }

  V() {
    return this.numV;
  }

  E() {
    return this.numE;
  }

  addEdge(v, w) {
    if (!this.adj[v].includes(w) && !this.adj[w].includes(v)) {
      this.adj[v].push(w);
      this.adj[w].push(v);
      this.numE++;
    }
  }

  toString() {
    let s = this.numV + ' vertices, ' + this.numE + ' edges\n';
    for (let v = 0; v < this.numV; v++) {
      s += v + ': ';
      for (let w of this.adj[v]) {
        s += w + ' ';
      }
      s += '\n';
    }
    return s;
  }
}

module.exports = Graph;
