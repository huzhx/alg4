/**
 * Return the topological order for a directed graph, only when it is a DAG (directed acyclic graph)
 */
class TopologicalSort {
  /** Track which vertex has been visited
   * @private @const {!Array<boolean>} */
  marked_;

  /** Track the vertices on recursion stack
   * @private {!Array<boolean>} */
  onStack_;

  /** @private {boolean} */
  isAcyclic_;

  /** The topological order for the given directed graph
   * @private @const {!Array<number>} */
  topOrder_;
  constructor(digraph) {
    this.marked_ = new Array(digraph.V()).fill(false);
    this.onStack_ = new Array(digraph.V()).fill(false);
    this.isAcyclic_ = true;
    this.topOrder_ = [];
    for (let v = 0; v < digraph.V(); v++) {
      if (this.marked_[v]) continue;
      this.dfs_(digraph, v);
    }
  }

  /**
   * If a directed graph is acyclic, the reverse postorder of the dfs traverse is the topological order
   * @param {!Digraph} digraph
   * @param {number} v
   */
  dfs_(digraph, v) {
    this.marked_[v] = true;
    this.onStack_[v] = true;
    for (let w of digraph.getAdjs(v)) {
      if (!this.isAcyclic_) return;
      if (!this.marked_[w]) {
        this.dfs_(digraph, w);
      } else {
        if (this.onStack_[w]) {
          this.isAcyclic_ = false;
        }
      }
    }
    this.onStack_[v] = false;
    this.topOrder_.unshift(v);
  }

  isDAG() {
    return this.isAcyclic_;
  }

  order() {
    return this.topOrder_;
  }
}

module.exports = TopologicalSort;
