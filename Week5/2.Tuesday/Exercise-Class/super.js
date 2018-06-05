class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${
      this.quirkyFact
    }`;
  }
}

class Mentor extends Person {
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

const bob = new Mentor("Bob Ross", "I like mountains way too much");
console.log(bob.bio());

const alice = new Student("Alice", "I like dancing");
console.log(alice.bio());
