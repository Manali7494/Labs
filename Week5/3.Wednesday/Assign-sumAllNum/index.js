function sumItems(array) {
  // Sum all the numbers in the array
  return array.reduce(function fn(sum, item) {
    if (Array.isArray(item)) {
      return item.reduce(fn, sum);
    } else if (item === Math.round(item)) {
      return sum + item;
    }
    return item;
  }, 0);
}

module.exports = sumItems;
