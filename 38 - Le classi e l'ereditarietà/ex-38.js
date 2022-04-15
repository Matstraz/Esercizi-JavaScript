class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount) ;
  }
}

class BankAccountVip extends BankAccount{
  constructor(initialAmount){   //come faccio a richiamre initialAmount/this initialAmount qui dentro??
    super(initialAmount)
  }

  interests = amount => amount/100*3 + amount;

  deposit(amount){
    if(amount >= 1000){
      return super.deposit(this.interests(amount));
    }else{
      return super.deposit(amount);
    }
  }

}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
