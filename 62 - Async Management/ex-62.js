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

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

fetchPersonById(2)
  .then((personJson) => JSON.parse(personJson))
  .then((person) => console.log(person))
  .catch((err) => console.error(err));


  let promise = fetchPersonById(2)

  async function withoutThen(){        //Versione sintetica. Non parsata e senza error catching.
    let jsonPerson = await promise;
    console.log(jsonPerson);
  }
  

async function withoutThen2(){         //Versione completa.
  let person2 = await promise
  .then((jsonPerson)=> JSON.parse(jsonPerson))
  .catch((err) => console.error(err));
  console.log(person2);
  }

  withoutThen()
  withoutThen2()