function getKeys(obj) {
  return Object.keys(obj)
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys); //Questa funzione restituirà ciò che è indicato nell'esempio e che tuttavia non corrisponde a quanto richiesto nella consegna.



function getKeys2(obj) {
  for(i = 0; i< Object.keys(obj).length; i++){
    console.log(Object.keys(obj)[i]);
  }
 }
 
 const person2 = {
   firstName: 'John',
   lastName: 'Doe',
   age: 32,
   city: 'Rome',
   job: 'Developer',
 };
 
 getKeys2(person2); //Questa funzione restituirà quanto richiesto nella consegna.