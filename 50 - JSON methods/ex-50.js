class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  fromJson(jsonstring){
    return JSON.parse(jsonstring);
  }
}

let person = new Person(1,'Mario','Rossi',25)

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = person.fromJson(json);
console.log(developer);
