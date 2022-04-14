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
        console.log(this.initialFounds) 
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
