class BankAccount{
    constructor(initialFounds){
        this.initialFounds = initialFounds
    }

    deposit(add){
        return this.initialFounds += add
    }
    withdraw(subtract){
        return this.initialFounds -= subtract
    }
    view(){
        return this.initialFounds
    }
}


const bankAccount = new BankAccount(1000);
console.log(bankAccount.deposit(500));
console.log(bankAccount.deposit(200));
console.log(bankAccount.withdraw(800));
console.log(bankAccount.view());
