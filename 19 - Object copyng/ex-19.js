const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName= 'Simon';


/*Modificando l'oggetto `person1` verrà modificato anche l'oggetto `person2` perchè
gli oggetti vengono assegnati per riferimento e non per valore. Sia `person1` che `person2`
punteranno quindi allo stesso oggetto. Questo comportamento potrebbe essere aggirato "clonando" 
`person1` attraverso il metodo Object.assign*/

console.log(person1);
console.log(person2);