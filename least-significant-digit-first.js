class LeastSignificantDigitFirst {
  /**
   * Sort items on certain number of leading characters
   * @param {!Array<string>} unsortedItems
   * @param {number} leadingCharsNum
   */
  sort(unsortedItems, leadingCharsNum) {
    const itemsLen = unsortedItems.length;
    const charsNum = 256;
    const sortedItems = new Array(itemsLen).fill(null);

    for (let sortingPosition = leadingCharsNum - 1; sortingPosition >= 0; sortingPosition--) {
      const charFreqsCount = new Array(charsNum + 1).fill(0);
      // Compute frequency counts
      for (let i = 0; i < itemsLen; i++) {
        const charIndex = unsortedItems[i].charCodeAt(sortingPosition) + 1;
        charFreqsCount[charIndex]++;
      }
      // Transform counts to indicies
      for (let i = 0; i < charsNum; i++) {
        charFreqsCount[i + 1] += charFreqsCount[i];
      }
      // Distribute
      for (let i = 0; i < itemsLen; i++) {
        const charIndex = unsortedItems[i].charCodeAt(sortingPosition);
        const sortedPosition = charFreqsCount[charIndex];
        sortedItems[sortedPosition] = unsortedItems[i];
        charFreqsCount[charIndex]++;
      }
      // Copy back
      for (let i = 0; i < itemsLen; i++) {
        unsortedItems[i] = sortedItems[i];
      }
    }

    return sortedItems;
  }
}

module.exports = LeastSignificantDigitFirst;
