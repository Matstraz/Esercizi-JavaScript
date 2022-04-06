function adultFilter(person) {
  for(let i=0; i<person.length; i++){
    if(person[i].age >= 18){
      console.log(person[i].name)
    }
  }
} 

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];


console.log(persons);
adultFilter(persons);
