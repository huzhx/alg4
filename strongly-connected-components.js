const DepthFirstOrder = require('./depth-first-order');
/**
 * Implement the Kosaraju's algorithm to find the strong components in a directed graph
 */
class SCC {
  /** Track which vertex has been visited
   * @private @const {!Array<boolean>} */
  marked_;

  /** Track the connected component id
   * @private @const {!Array<number>}
   */
  id_;

  /** The number of strong components
   * @private {number} */
  count_;
  constructor(digraph) {
    this.marked_ = new Array(digraph.V()).fill(false);
    this.id_ = new Array(digraph.V()).fill(null);
    this.count_ = 0;
    const reverseDigraph = digraph.reverse();
    const order = new DepthFirstOrder(reverseDigraph);
    for (let v of order.reversePost()) {
      if (!this.marked_[v]) {
        this.dfs_(digraph, v);
        this.count_++;
      }
    }
  }

  dfs_(digraph, v) {
    this.marked_[v] = true;
    this.id_[v] = this.count_;
    for (let w of digraph.getAdjs(v)) {
      if (!this.marked_[w]) {
        this.dfs_(digraph, w);
      }
    }
  }

  stronglyConnected(v, w) {
    return this.id_[v] === this.id_[w];
  }

  count() {
    return this.count_;
  }
}

module.exports = SCC;
