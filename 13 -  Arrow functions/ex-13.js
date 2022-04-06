const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide =  (a, b) => a / b;

const log = (value) => console.log(value);

let sum1 = sum(2,4);
let sum2 = sum(5,2);

log(divide(subtract(multiply(sum1,sum2),2),5));  //Questa funzione restituirà in console il risultato matematico dell'operazione svolta (8).

/*Dalla consegna non è chiaro se in console debba apparire il risultato 
dell'operazione matematica o l'operazione stessa.
Di seguito le variabili modificate per restituire l'espressione così come
presentata all'interno del file README.md*/

const sum0 = (a, b) =>`(${a} + ${b})`;

const subtract0 = (a, b) =>  `${a} - ${b}`;

const multiply0 = (a, b) => `${a} * ${b}`;

const divide0 =  (a, b) => `(${a}) / ${b}`;

const log0 = (value) => console.log(value);

let sum3 = sum0(2,4);
let sum4 = sum0(5,2);

log0(divide0(subtract0(multiply0(sum3,sum4),2),5));