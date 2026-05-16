// ==============================================
// PRIVATE MODIFIER
// ==============================================

class BankAccount {

    // private property
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    // method inside class
    showBalance(): void {

        // private property ভিতরে access করা যায়
        console.log("Balance:", this.balance);
    }
}

const account1 = new BankAccount(5000);

// method দিয়ে access করা হচ্ছে
account1.showBalance();


// ❌ ERROR হবে
// console.log(account1.balance);