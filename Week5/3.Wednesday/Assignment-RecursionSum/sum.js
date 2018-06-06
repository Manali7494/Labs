function sumToOne(n) {
  if (n === 1) {
    return 1;
  }
  if (n > 1) {
    return n + sumToOne(n - 1);
  }
}

console.log(`The sum is ${sumToOne(4)}`);
