class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    try{
      if(amount < 0){
        throw new Error (`You can't deposit negative values`)
      }else{
        this.#amount += amount;
      }
    }catch(err){
      console.log(err)
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    try{
      if(amount < 0){
        throw new Error (`You can't withdraw negative values`)
      }else if(amount > this.#amount){
        throw new Error (`you can't withdraw more money than you have got`)
      }else{
        this.#amount -= amount;
      }
    }catch(err){
      console.log(err)
    }
  }
  

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
