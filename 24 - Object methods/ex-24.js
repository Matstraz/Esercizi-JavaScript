const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values

let arrPerson = Object.values(person)

function showValueList(values){
  for(let i = 0; i < values.length; i++){
    console.log(values[i])
  }
}

showValueList(arrPerson)
