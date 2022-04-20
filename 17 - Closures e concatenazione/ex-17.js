function calculate() {
  let totalAmount = 0 
  return mathOperataion = {
    add(number){
      return totalAmount += number, this;
    },
    multiply(number){
      return totalAmount *= number, this;
    },
    sub(number){
      return totalAmount -= number, this;
    },
    divide(number){
      return totalAmount /= number, this;
    }/* ,
    canc(){
      return totalAmount -= totalAmount, this; //Ho implementato anche questo metodo che resetta il calcolo
    } */,
    printResult(){
      console.log(totalAmount);
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2)/* .canc() */.printResult();



