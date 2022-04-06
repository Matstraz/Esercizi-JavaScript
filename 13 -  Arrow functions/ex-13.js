const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide =  (a, b) => a / b;

const log = (value) => console.log(value);

let sum1 = sum(2,4);
let sum2 = sum(5,2);

log(divide(subtract(multiply(sum1,sum2),2),5));

//non è chiaro se in console debba apparire il risultato dell'operazione o l'operazione stessa.