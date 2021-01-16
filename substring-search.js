/**
 * The search() method below operates to find the first occurrence of a pattern string pat in a text string txt. The program keeps one pointer i into the text and another pointer j into the pattern. For each i, it resets j to 0 and increments it until finding a mismatch or the end of the pattern (j === pat.length). If we reach the end of the text (i === txt.length - pat.length + 1) before the end of the pattern, then there is no match. Our convention is to return the value txt.length to indicate a mismatch.
 * This method requires ~NM character compares to search for a pattern of length M in a text of N length, in the worst case. A worst-case input is when both pattern and text are all As followed by a B.
 * @param {string} txt
 * @param {string} pat
 */

const search = (txt, pat) => {
  const txtLen = txt.length;
  const patLen = pat.length;
  for (let i = 0; i <= txtLen - patLen; i++) {
    let j;
    for (j = 0; j < patLen; j++) {
      if (txt[i + j] !== pat[j]) break;
    }
    if (j === patLen) return i; // found
  }
  return patLen; // not found
};

module.exports = search;
