class Person {
  constructor(name, quirkyFact, animal) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.favAnima = animal;
  }
  bio() {
    return `My name is ${this.name} and here is my quirky fact: ${
      this.quirkyFact
    }`;
  }
  fav() {
    return `My fav animal is ${this.favAnima} and I love all animals`;
  }
}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }
  goOffShift() {
    this.onShift = false;
  }
}

let student1 = new Student("Alice", "I love frongs", "Rabbits");

let mentor1 = new Mentor("James", "I love climbing", "Lions");

console.log(student1.fav());
console.log(mentor1.fav());