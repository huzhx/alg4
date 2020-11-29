class KeyIndexedCounting {
  /** @private @const {!Array<number>} */
  counts_;

  /** @private @const {!Array<{name:string, section:number}>} */
  sortedItems_;

  /**
   * Assume the information is kept in an array a[] of items that each contain a name and a section number
   * @param {!Array<{name:string, section:number}>} items
   */
  constructor(items) {
    this.items = items;
    this.counts_ = new Array(this.items.length + 1).fill(0);
    this.sortedItems_ = new Array(this.items.length).fill(null);
  }

  sort() {
    return this.computeFreqCounts().transformCountsToIndices().distributeData().sortedItems_;
  }

  computeFreqCounts() {
    for (let i = 0; i < this.items.length; i++) {
      this.counts_[this.items[i].section + 1]++;
    }
    return this;
  }

  transformCountsToIndices() {
    for (let i = 0; i < this.counts_.length - 1; i++) {
      this.counts_[i + 1] += this.counts_[i];
    }
    return this;
  }

  distributeData() {
    for (let i = 0; i < this.items.length; i++) {
      const index = this.counts_[this.items[i].section];
      this.sortedItems_[index] = this.items[i];
      this.counts_[this.items[i].section]++;
    }
    return this;
  }
}

module.exports = KeyIndexedCounting;
