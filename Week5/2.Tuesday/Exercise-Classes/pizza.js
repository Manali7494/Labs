class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

let pizza1 = new Pizza("large", "thin");
let pizza2 = new Pizza("large", "thick");
pizza1.addTopping("chicken");
pizza1.addTopping("pineapple");

// console.log(pizza1.toppings);
console.log(pizza1);
console.log(pizza2);
