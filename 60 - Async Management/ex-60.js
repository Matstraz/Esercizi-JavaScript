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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id){
  return new Promise((resolve) =>{
    setTimeout(() =>{
      if(persons.find(item => item.id === id)){
        resolve(persons.find(item => item.id === id).firstName)}
    }, 1000)
  })
}

function fetchJobById(id){
  return new Promise((resolve) =>{
    setTimeout(() =>{
      if(jobs.find(item => item.id === id)){
        resolve(jobs.find(item => item.id === id).jobTitle)}
    }, 1000)
  })
}


let promise = fetchPersonById(2);
let promise2 = fetchJobById(2);

promise
.then((name) => {
  return promise2.then((job) => {
    console.log(name, job) 
  });
});

