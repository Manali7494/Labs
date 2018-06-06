class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    this.transactions.forEach((item, index) => {
      balance += item.amount;
    });
    return balance;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    // Keep track of the time of transaction
    if (this.isAllowed()) {
      this.time = new Date();
      this.amount = this.value;
      // Add transaction to the account;
      this.account.addTransaction(this);
      return true;
    }
  }
}
class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}
class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }

  isAllowed() {
    if (this.account.balance + this.value < 0) {
      return false;
    } else {
      return true;
    }
  }
}

// DRIVER CODE BELOW
const myAccount = new Account("Alice");
const t1 = new Deposit(50, myAccount);
t1.commit();
console.log(myAccount.balance);
const t2 = new Withdrawal(20, myAccount);
t2.commit();
console.log(myAccount.balance);
const t3 = new Withdrawal(30, myAccount);
t3.commit();
console.log(myAccount.balance);
const t4 = new Withdrawal(40, myAccount);
t4.commit();
console.log(myAccount.balance);

