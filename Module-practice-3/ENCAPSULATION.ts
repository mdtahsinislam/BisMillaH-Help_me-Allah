// ==============================================
// ENCAPSULATION
// ==============================================

class BankAccount {

    // private property
    // বাইরে থেকে access করা যাবে না

    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    // deposit method
    deposit(amount: number): void {

        this.balance += amount;

        console.log("Deposited:", amount);
    }

    // getter method
    getBalance(): number {
        return this.balance;
    }
}

// object create

const account1 = new BankAccount(1000);

// deposit money
account1.deposit(500);

// balance check
console.log("Current Balance:", account1.getBalance());


// ❌ direct access possible না
// console.log(account1.balance);