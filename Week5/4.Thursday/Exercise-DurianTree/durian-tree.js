class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleTOCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople = numberOfPeople + 1;
    }
    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}

// Completing Tree Data Structure
const ada = new Employee("Ada", "CEO", 3000000.0);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);

// Ada's subordinates
const craig = new Employee("Craig", "VP Software", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

// Craig's subordinates
const simon = new Employee("Simone", "worker", 50000);
const ali = new Employee("Ali", "worker", 50000);
craig.addSubordinate(simon);
craig.addSubordinate(ali);

// Phil's subordinates
const florida = new Employee("Florida", "worker", 50000);
const david = new Employee("david", "worker", 50000);
const brian = new Employee("brian", "worker", 50000);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

// Angela's subordinates
const karla = new Employee("karla", "worker", 50000);
angela.addSubordinate(karla);

// Feature 1 - Employee's Boss
console.log(karla.boss);

// Feature 2 - Number of subordinates
console.log(phil.numberOfSubordinates);

// Feature 3 - Levels to CEO
console.log(david.numberOfPeopleTOCEO);

// Feature 4 - Has same boss
console.log(david.hasSameBoss(brian));