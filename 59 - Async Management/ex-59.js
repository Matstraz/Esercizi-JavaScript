const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`person with id = ${id} doesn't exist`);
    }, 1000);
  });
}

let promise = fetchPersonById(3)
promise
.then((obj) => {
  return obj
})
.then((obj) => console.log(JSON.parse(obj)))
.catch((e) => console.log('Error:',e))