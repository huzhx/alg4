/**
 * Traverse various orders defined by depth-first search
 */
class DepthFirstOrder {
  /** Track which vertex has been visited
   * @private @const {!Array<boolean>} */
  marked_;

  /** Track the vertices visited by reverse postorder
   * @private @const {!Array<number>} */
  reversePost_;
  constructor(digraph) {
    this.marked_ = new Array(digraph.V()).fill(false);
    this.reversePost_ = [];

    for (let v = 0; v < digraph.V(); v++) {
      if (!this.marked_[v]) {
        this.dfs_(digraph, v);
      }
    }
  }

  dfs_(digraph, v) {
    this.marked_[v] = true;
    for (let w of digraph.getAdjs(v)) {
      if (!this.marked_[w]) {
        this.dfs_(digraph, w);
      }
    }
    this.reversePost_.unshift(v);
  }

  reversePost() {
    return this.reversePost_;
  }
}

module.exports = DepthFirstOrder;
