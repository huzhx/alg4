/**
 * Given a digraph and a set of source vertices, and find out which vertices can be reached
 */
class DirectedDFS {
  /** Track which vertex has been visited
   * @private @const {!Array<boolean>} */
  marked_;
  constructor(digraph, sources) {
    this.marked_ = new Array(digraph.V()).fill(false);
    for (let v of sources) {
      if (this.marked_[v]) continue;
      this.dfs_(digraph, v);
    }
  }

  /**
   * Run dfs and mark each visited vertex
   * @param {!Digraph} digraph
   * @param {number} v
   */
  dfs_(digraph, v) {
    this.marked_[v] = true;
    for (let w of digraph.getAdjs(v)) {
      if (this.marked_[w]) continue;
      this.dfs_(digraph, w);
    }
  }

  reachableV() {
    const ans = [];
    this.marked_.filter((reachable, i) => {
      if (reachable) {
        ans.push(i);
      }
    });
    return ans;
  }
}

module.exports = DirectedDFS;
