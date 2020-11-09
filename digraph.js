/**
 * A class to model directed graph
 */
class Digraph {
  /** @private @const {number} */
  numV_;

  /** @private {number} */
  numE_;

  /** @private @const {!Array<number>} */
  adj_;
  constructor(numV) {
    this.numV_ = numV;
    this.numE_ = 0;
    this.adj_ = new Array(this.numV_).fill(null).map(() => new Array(0).fill(null));
  }

  V() {
    return this.numV_;
  }

  E() {
    return this.numE_;
  }

  /**
   * Add edge v->w to this digraph
   * @param {number} v
   * @param {number} w
   */
  addEdge(v, w) {
    if (!this.adj_[v].includes(w)) {
      this.adj_[v].push(w);
      this.numE_++;
    }
  }

  toString() {
    let s = this.numV_ + ' vertices, ' + this.numE_ + ' edges\n';
    for (let v = 0; v < this.numV_; v++) {
      s += v + ': ';
      for (let w of this.adj_[v]) {
        s += w + ' ';
      }
      s += '\n';
    }
    return s;
  }

  /**
   * Return a new digraph that has all the the current digraph's edges reversed
   */
  reverse() {
    const r = new Digraph(this.numV_);
    for (let v = 0; v < this.numV_; v++) {
      for (let w of this.adj_[v]) {
        r.addEdge(w, v);
      }
    }
    return r;
  }

  getAdjs(v) {
    return this.adj_[v];
  }
}

module.exports = Digraph;
