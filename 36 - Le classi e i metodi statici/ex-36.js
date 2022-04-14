class Person {
  static Mario = 'manfredi'
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject (objlit){
    objlit = new Person(objlit.firstName, objlit.lastName)
    return objlit
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};



const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);
console.log(person)


