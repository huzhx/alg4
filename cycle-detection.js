/**
 * Is a given graph acylic?
 */
class CycleDetection {
  /** @private @const {!Array<boolean>} */
  marked_;
  /** @private {boolean} */
  hasCycle_;

  /**
   * Read a graph and check if there is a cycle
   * @param {!Graph} graph
   */
  constructor(graph) {
    this.marked_ = new Array(graph.V());
    for (let s = 0; s < graph.V(); s++) {
      if (!this.marked_[s]) {
        this.dfs_(graph, s, s);
      }
    }
  }

  /**
   * Run dfs and carry the current vertex and parent vertex. If a vertex is visited and not the parent of the current vertex, then there is a cycle.
   * @param {!Graph} graph
   * @param {number} v
   * @param {number} s
   */
  dfs_(graph, v, s) {
    this.marked_[v] = true;
    for (let w of graph.adj[v]) {
      if (!this.marked_[w]) {
        this.dfs_(graph, w, v);
      } else {
        if (w !== s) this.hasCycle_ = true;
      }
    }
  }

  hasCycle() {
    return this.hasCycle_;
  }
}

module.exports = CycleDetection;
