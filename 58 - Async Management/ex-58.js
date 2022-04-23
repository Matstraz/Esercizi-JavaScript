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
      if(typeof persons.find(item => item.id === id) !== 'undefined'){
        resolve(persons.find(item => item.id === id))
      }else{
        reject(new Error('No names with this id'))
      }
      }, 1000);
  });
}

fetchPersonById(1)
.then((obj) => {
  console.log(obj);
  return fetchPersonById(3)
})
.then((obj) => {
  console.log(obj);
  return fetchPersonById(5)
})
.then((obj) => console.log(obj))
.catch((err) => console.log('Error:', err));