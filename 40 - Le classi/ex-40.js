 class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  get name(){
    return this.fname
  }

  set firstName(value){
    this.fname = value
  }
  
  get surname(){
    return this.lname
  }

  set lastName(value){
    this.lname = value
  }

  get ages(){
    return this.old
  }

  set age(value){
    this.old = value
  }
 
  get fullName(){
    return `${this.name} ${this.surname}` 
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);


person.firstName = 'Maria';
person.lastName = 'Verdi';

console.log(person.fullName);
