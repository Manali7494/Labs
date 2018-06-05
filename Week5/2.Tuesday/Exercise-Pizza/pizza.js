class Pizza {
  constructor(crust) {
    this.crust = crust;
    this.toppings = ["cheese"];
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
  // Note: When setting values, the function and the propety can not be used
  // Therefore: '_' feature was used instead
  set size(size) {
    if (size === "s" || size === "m" || size === "l") {
      this._size = size;
    }
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }
}

let pizza1 = new Pizza("thin");
let pizza2 = new Pizza("thick");

// Setting toppings
pizza1.addTopping("japalpeno");
pizza1.addTopping("onions");

// Getting price
// console.log(`Price is $${pizza1.price}`);
// console.log(`Price is $${pizza2.price}`);

// Set Size
console.log(pizza1.price);
pizza1.size = "s";
console.log(pizza1._size);
