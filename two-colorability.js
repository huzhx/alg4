/**
 * Cantheverticesofagivengraphbeassigned one of two colors in such a way that no edge connects vertices of the same color?
 */
class TwoColorability {
  /** @private @const {!Array<boolean>} */
  marked_;
  /** @private @const {!Array<boolean>} */
  color_;
  /** @private {boolean} */
  isTwoColorable_ = true;

  /**
   * Read a graph and check if the graph is bipartite ?
   * @param {!Graph} graph
   */
  constructor(graph) {
    this.marked_ = new Array(graph.V()).fill(false);
    this.color_ = new Array(graph.V()).fill(false);
    for (let s = 0; s < graph.V(); s++) {
      if (!this.marked_[s]) {
        this.dfs_(graph, s);
      }
    }
  }

  /**
   * If find the adj vertices have same color, set isTwoColorable_ to be false
   * @param {!Graph} graph
   * @param {number} v
   */
  dfs_(graph, v) {
    this.marked_[v] = true;
    for (let w of graph.adj[v]) {
      if (!this.marked_[w]) {
        this.color_[w] = !this.color_[v];
        this.dfs_(graph, w);
      } else {
        if (this.color_[w] === this.color_[v]) this.isTwoColorable_ = false;
      }
    }
  }

  isBipartite() {
    return this.isTwoColorable_;
  }
}

module.exports = TwoColorability;
