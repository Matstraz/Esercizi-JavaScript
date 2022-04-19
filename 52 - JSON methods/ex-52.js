const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25
};
/* delete person.firstName;                            //Questo è il primo metodo a cui ho pensato. Funziona ma per ovvie ragioni non può essere utilizzato.
 delete person.lastName;
 const json0 = (JSON.stringify(person));
 console.log(json0); */


function filtering(obj){                               //Anche questo metodo, nonostante restituisca il risultato richiesto, non può andare bene. Infatti, 
  if (true) {                                          //nel momento in cui all'oggetto person venisse aggiunta una nuova proprità con valore numerico,
    const filterObject = { id: obj.id, age: obj.age }  //questa non verrebbe filtrata, perchè identificata da una chiave diversa da quelle presenti nella funzione filtro.
    return filterObject;
  }
}

let filter = filtering(person);
const json = (JSON.stringify(filter));
console.log(json);


let filter2 = Object.fromEntries(Object.entries(person) //Le variabili filter2 e filter3 sono due strade pressocchè equivalenti per ottenere il risultato richiesto.      
.filter(item => typeof item[1] == 'number'))            
const json2 = JSON.stringify(filter2)
console.log(json2)

let filter3 = Object.entries(person)
.filter(item => typeof item[1] == 'number')
.map(element => element[0])
const json3 = JSON.stringify(person, filter3)
console.log(json3)




