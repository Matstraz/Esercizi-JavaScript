class BankAccount{
    constructor(initialFunds){
        this.initialFunds = initialFunds
    }

    deposit(add){
        return this.initialFunds += add
    }
    withdraw(subtract){
        return this.initialFunds -= subtract
    }
    view(){
        console.log(this.initialFunds) 
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
