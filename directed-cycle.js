/**
 * Does a given digraph have directed cycle? If so, find the vertices on such cycle, in order from some vertex back to itself
 */
class DirectedCycle {
  /** Track which vertex has been visited
   * @private @const {!Array<boolean>} */
  marked_;

  /** Track the parent vertex
   * @private @const {!Array<number>} */
  edgeTo_;

  /** Track the vertices in the cycle
   * @private {!Array<number>} */
  cycle_;

  /** Track the vertices on recursion stack
   * @private {!Array<boolean>} */
  onStack_;
  constructor(digraph) {
    this.onStack_ = new Array(digraph.V()).fill(false);
    this.marked_ = new Array(digraph.V()).fill(false);
    this.edgeTo_ = new Array(digraph.V());
    this.cycle_ = null;
    for (let v = 0; v < digraph.V(); v++) {
      if (this.marked_[v]) continue;
      this.dfs_(digraph, v);
    }
  }

  /**
   * When find an edge v->w to a vertex w that is still on the recursion stack, there is a directed cycle
   * @param {!Digraph} digraph
   * @param {number} v
   */
  dfs_(digraph, v) {
    this.onStack_[v] = true;
    this.marked_[v] = true;
    for (let w of digraph.getAdjs(v)) {
      if (this.hasCycle()) return;
      if (!this.marked_[w]) {
        this.edgeTo_[w] = v;
        this.dfs_(digraph, w);
      } else {
        if (this.onStack_[w]) {
          this.cycle_ = [];
          for (let x = v; x !== w; x = this.edgeTo_[x]) {
            this.cycle_.unshift(x);
          }
          this.cycle_.unshift(w);
          this.cycle_.unshift(v);
        }
      }
    }
    this.onStack_[v] = false;
  }

  hasCycle() {
    return this.cycle_ !== null;
  }

  cycle() {
    return this.cycle_;
  }
}

module.exports = DirectedCycle;
