class Vec {
  constructor(...args) {
    this.x = args[0];
    this.y = args[1];
  }

  plus(args) {
    let newX = args.x + this.x;
    let newY = args.y + this.y;
    return `{x: ${newX}, y: ${newY}}`;
  }

  minus(args) {
    let newX = this.x - args.x;
    let newY = this.y - args.y;
    return `{x: ${newX} , y: ${newY}}`;
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
