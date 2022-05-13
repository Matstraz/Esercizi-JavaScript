const person = {
  get myName(){
    return this.name;
  },

  set firstName(value){
    this.name = value;
  },

  get mySurname(){
    return this.surname;
  },

  set lastSurname(value){
    this.surname = value;
  },

  fullName(){
    return `${this.name} ${this.lastName}` 
  }
}

const john = Object.create(person)
john.firstName = 'john'
john.lastName = 'Doe'

const simon = Object.create(person)
simon.firstName = 'Simon'
simon.lastName = 'Collins'

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins