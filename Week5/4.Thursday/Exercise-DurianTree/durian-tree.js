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

  employeesThatMakeOver(amount) {
    let employees = [];

    if (this.salary > amount) {
      employees.push(this);
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(
        amount
      );
      employees = employees.concat(subordinatesThatMakeOver);
    }
    return employees;
  }

  get totalEmployees() {
    let total = 0;
    if (this.name !== null) {
      total++;
    }
    for (const indvEmployee of this.subordinates) {
      total = total + indvEmployee.totalEmployees;
    }
    return total;
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
const simon = new Employee("Simone", "worker", 200000);
const ali = new Employee("Ali", "worker", 100000);
craig.addSubordinate(simon);
craig.addSubordinate(ali);

//Add Ali's subordinates
const sarah = new Employee("Sarah", "worker", 95000);
const andrew = new Employee("Andrew", "worker", 90000);

ali.addSubordinate(sarah);
ali.addSubordinate(andrew);

// Phil's subordinates
const florida = new Employee("Florida", "worker", 150000);
const david = new Employee("david", "worker", 200000);
const brian = new Employee("brian", "worker", 100000);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

// add David's subordinates
const emma = new Employee("Emma", "worker", 60000);
const jeremy = new Employee("Jeremy", "worker", 60000);

david.addSubordinate(emma);
david.addSubordinate(jeremy);

// Angela's subordinates
const karla = new Employee("karla", "worker", 120000);
angela.addSubordinate(karla);

// Add Karla's subordinate
const chandler = new Employee("Chandler", "worker", 100000);
karla.addSubordinate(chandler);

// Feature 1 - Employee's Boss
console.log(karla.boss);

// Feature 2 - Number of subordinates
console.log(phil.numberOfSubordinates);

// Feature 3 - Levels to CEO
console.log(david.numberOfPeopleTOCEO);

// Feature 4 - Has same boss
console.log(david.hasSameBoss(brian));

// Feature6 - Find employees that make over a certain amount
let wealthyEmployees = ada.employeesThatMakeOver(418401);
console.log(wealthyEmployees);

// Feature 7 - Total employees under certain employee
console.log(craig.totalEmployees);
console.log(ada.totalEmployees);

