function sum(fromN, toN) {
  // Sum all the values from fromN up to toN

  // Base case
  if (fromN === toN) {
    return fromN;
  }
  // Recursive Case
  if (fromN !== toN && fromN < toN) {
    return sum(fromN + 1, toN) + fromN;
  }
}

module.exports = sum;
